import Footer from "@/components/(home)/shared/Footer";
import Navbar from "../../components/(home)/shared/Navbar";
import "../globals.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />

      <main className="min-h-[calc(100vh-25.75rem)]">{children}</main>

      <Footer />
    </div>
  );
}
