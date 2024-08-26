import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Katiraei | Web Developer, Software Engineer",
  description: "Laravel, Symfony, PHP, reactjs, js, JavaScript, TypeScript, nodejs, express.js, Next.js, mongo, mysql, agile, ali katiraie",
  keywords:"Web Developement, Laravel Developer, Backend Developer, Nodejs Developer, Fullstack Developer, Microservice",
  authors:[{name:"Ali Katiraei"}],
  robots:"index, follow",
  themeColor:"#202030",
  openGraph:{
    title:"Ali Katiraei | Web Developer, Software Engineer",
    images:[{url:"/favicon.ico"}],
    url:"https://alikatiraei.com",
    siteName:"Ali Katiraei",
    

  }
};

const orbitronFont = localFont({
  src: [
    {
      path: "../public/fonts/Orbitron-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Orbitron-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Orbitron-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Orbitron-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Orbitron-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Orbitron-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-orbitron",
});

const titilliumFont = localFont({
  src: [
    {
      path: "../public/fonts/TitilliumWeb-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/TitilliumWeb-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/TitilliumWeb-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/TitilliumWeb-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-titillium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <script type="text/javascript" dangerouslySetInnerHTML={{__html:`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "lq7l0qb42t");`}}>
            
        </script>
      <body className={`${orbitronFont.variable} ${titilliumFont.variable} font-orbitron`}>
        <Container>{children}</Container>
        </body>
    </html>
  );
}
