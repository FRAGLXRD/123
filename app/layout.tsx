import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={GeistSans.className}><body><div className="min-h-screen flex"><Sidebar/><main className="flex-1"><Topbar/><div className="p-4">{children}</div></main></div></body></html>;
}
