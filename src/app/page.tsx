import Footer from "~/widgets/footer/Footer";
import Header from "~/widgets/header/Header";
import HomeEighthBlock from "~/widgets/home/EighthBlock/HomeEighthBlock";
import HomeFifthBlock from "~/widgets/home/FifthBlock/HomeFifthBlock";
import HomeFirstBlock from "~/widgets/home/FirstBlock/HomeFirtsBlock";
import HomeFourthBlock from "~/widgets/home/FourthBlock/HomeFourthBlock";
import HomeSecondBlock from "~/widgets/home/SecondBlock/HomeSecondBlock";
import HomeSeventhBlock from "~/widgets/home/SeventhBlock/HomeSeventhBlock";
import HomeSixthBlock from "~/widgets/home/SixthBlock/HomeSixthBlock";
import HomeThirdBlock from "~/widgets/home/ThirdBlock/HomeThirdBlock";

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
