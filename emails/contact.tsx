import { Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface Props {
  name?: string;
  email?: string;
  message?: string;
}

export default function Email({ name, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Message In Ali Katiraei.</Preview>
      <Body style={main}>
        <Container style={container}>
        <Img
          src={`${process.env.SITE_URL}/favicon.ico`}
          width={48}
          height={48}
          alt="Ali Katiraei"
        />
          <Heading style={heading}>You have new message</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              Name:
            </Text>
            <Text style={paragraph}>
              {name}
            </Text>
          </Section>
          <Hr style={hr} />
          <Section style={body}>
            <Text style={paragraph}>
              Email:
            </Text>
            <Text style={paragraph}>
              {email}
            </Text>
          </Section>
          <Hr style={hr} />
          <Section style={body}>
            <Text style={paragraph}>
              Message:
            </Text>
            <Text style={paragraph}>
              {message}
            </Text>
          </Section>
          
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
