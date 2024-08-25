import { NextRequest, NextResponse, userAgent } from "next/server";

export async function middleware(request: NextRequest) {
  const { browser, device, os, cpu } = userAgent(request);

  let clientInfo = {
    browser: {
      name: browser.name || "Unknown Browser",
      version: browser.version || "Unknown Version",
    },
    device: {
      model: device.model || "Unknown Model",
      type: device.type || "Unknown Type",
      vendor: device.vendor || "Unknown Vendor",
    },
    os: {
      name: os.name || "Unknown OS",
      version: os.version || "Unknown Version",
    },
    cpu: {
      architecture: cpu.architecture || "Unknown Architecture",
    },
    ip: "",
  };

  const headers = new Headers(request.headers);
  const ip = headers.get("x-forwarded-for");
  clientInfo.ip = ip ? ip.toString() : "";

  headers.set("client-info", JSON.stringify(clientInfo));

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
