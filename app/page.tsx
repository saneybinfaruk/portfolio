import Divider from "./components/Divider";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import SayHello from "./components/SayHello";
import SocialLinks from "./components/SocialLinks";
import Heading from "./components/Heading";

export default function Home() {
  
  return (
    <main className="px-8 md:px-12 py-8 md:py-10 max-w-screen-lg mx-auto">
      <Heading />
      <Divider />
      <AboutMe />
      <Divider />
      <Skills />
      <Divider />
      <Portfolio />
      <Divider />
      <SayHello />
      <SocialLinks />
    </main>
  );
}
