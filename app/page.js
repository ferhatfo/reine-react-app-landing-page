import About from "@/Components/About/About";
import Features from "@/Components/Features/Features";
import Header from "@/Components/Header/Header";
import HomePage from "@/Components/HomePage/HomePage";
import VideoSection from "@/Components/VideoSection/VideoSection";
import Rewievs from "@/Components/Rewievs/Rewievs";
import Price from "@/Components/Price/Price";
import Footer from "@/Components/Footer/Footer"
export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Features />
      <About />
      <VideoSection />
      <Rewievs />
      <Price />
      <Footer />
    </>
  )
}
