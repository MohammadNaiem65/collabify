import Footer from "@/components/(home)/shared/Footer";
import Header from "../../components/(home)/shared/Header";
import "../globals.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />

      <main className="h-[calc(100vh-25.75rem)]">{children}</main>

      <Footer />
    </div>
  );
}
