
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import HeaderTop from "../Components/home/HeaderTop";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Nafees Ahmed Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={raleway.className}>
          <HeaderTop />
          <Toaster
       toastOptions={{
        style:{
          backgroundColor:"#a7f279",
          color:"#FFFFFF"
        }
      }}  
       />
        {children}
        </body>
    </html>
  );
};