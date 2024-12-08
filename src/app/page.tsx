import Footer from "~/widgets/footer/footer";
import Header from "~/widgets/header/header";
import HomeFirstBlock from "~/widgets/home/first-block/home-firts-block";
import HomeFourthBlock from "~/widgets/home/fourth-block/home-fourth-block";
import HomeSecondBlock from "~/widgets/home/second-block/home-second-block";
import HomeThirdBlock from "~/widgets/home/third-block/home-third-block";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeFirstBlock />
        <HomeSecondBlock />
        <HomeThirdBlock />
        <HomeFourthBlock />
      </main>
      <Footer />
    </>
  );
}
