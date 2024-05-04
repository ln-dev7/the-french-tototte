import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Mobile from "@/components/mobile";

export default function Home() {
  return (
    <>
      <div className="relative hidden xl:block bg-bg-2">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="xl:hidden block bg-bg-blue">
        <Mobile />
      </div>
    </>
  );
}
