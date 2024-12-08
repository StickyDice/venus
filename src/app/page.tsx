import Footer from "~/widgets/footer/footer";
import Header from "~/widgets/header/header";
import HomeEighthBlock from "~/widgets/home/eighth-block/home-eighth-block";
import HomeFifthBlock from "~/widgets/home/fifth-block/home-fifth-block";
import HomeFirstBlock from "~/widgets/home/first-block/home-firts-block";
import HomeFourthBlock from "~/widgets/home/fourth-block/home-fourth-block";
import HomeSecondBlock from "~/widgets/home/second-block/home-second-block";
import HomeSeventhBlock from "~/widgets/home/seventh-block/home-seventh-block";
import HomeSixthBlock from "~/widgets/home/sixth-block/home-sixth-block";
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
        <HomeFifthBlock />
        <HomeSixthBlock />
        <HomeSeventhBlock />
        <HomeEighthBlock />
      </main>
      <Footer />
    </>
  );
}
