import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Projects from "@/components/Projects";
// import Background from "@/components/ui/Background-raw-dotted";
// import Background from "@/components/ui/Background-cursor-based-glow";
// import Background from "@/components/ui/Background-github-graph-like";
// import Background from "@/components/ui/Background-visible-non-glowing-github-type";

export default function Home() {
	return (
		<>
    {/* <Background/> */}
    <Navbar/>
    {/* <br /> */}
    <Hero/>
	<About/>
	<Portfolio/>
	<Projects/>
	<Footer/>
		</>
	
	);
}
