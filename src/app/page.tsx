import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Middle from "@/components/Middle";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Intro />
      <Middle />
      <Footer />
    </main>
  );
}
