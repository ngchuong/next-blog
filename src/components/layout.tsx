import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header/header";
import Footer from "./footer/index";
import { styled, Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AppCont = styled("div")`
    min-height: 100vh;
    background-color: #282c34;
    color: #fff;
    width: 100%;
    height: 100%;
    font-size: 18px;
  `;

  const Container = styled("div")`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const Body = styled("div")`
    margin-top: 70px;
    padding: 0 300px;
    min-height: 720px;
  `;

  return (
    <AppCont>
      <Container>
        <Header />
        <Body className={inter.className}>{children}</Body>
        <Footer />
      </Container>
    </AppCont>
  );
}
