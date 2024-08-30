import { Button, Html } from "@react-email/components";
import * as React from "react";

interface Props{
    name?:string,
    email?:string,
    message?:string,
}

export default function Email({name,email,message}:Props) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me {name}{email}{message}
      </Button>
    </Html>
  );
}