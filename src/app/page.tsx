import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Mobile from "@/components/mobile";

export default function Home() {
  return (
    <>
      <div className="relative hidden lg:block">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="lg:hidden block">
        <Mobile />
      </div>
    </>
  );
}
