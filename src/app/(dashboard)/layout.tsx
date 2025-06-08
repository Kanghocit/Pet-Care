import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Menu from "@/components/menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}
