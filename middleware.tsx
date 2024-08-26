import { NextRequest, NextResponse, userAgent } from "next/server";


interface IpInfo {
  city: string;
  country_name: string;
  status: string;
  latitude: string;
  longitude: string;
}

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
    geo:{
      ip: "",
      country:"",
      city:"",
      long:"",
      lat:"",
    }
  };

  const headers = new Headers(request.headers);
  const ip = headers.get("x-forwarded-for");
  clientInfo.geo.ip = ip ? ip.toString() : "";


  let data :IpInfo;
  // data=await (fetch("https://api.ipgeolocation.io/ipgeo?apiKey=f31a9cacb7b14049873f92fc055579f6&ip="+ip).then(res=>res.json()).catch((err)=>console.log("third api error",err)))
  // clientInfo.geo.country = data ? data.country_name : "";
  // clientInfo.geo.city = data ? data.city : "";
  // clientInfo.geo.lat = data ? data.latitude : "";
  // clientInfo.geo.long = data ? data.longitude : "";
  headers.set("client-info", JSON.stringify(clientInfo));

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
