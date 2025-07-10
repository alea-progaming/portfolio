import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Bento from "./components/Bento";

export default function Home() {
  return (
    <>
      {/* <div className="overflow-x-hidden"> */}
      <Navbar />
      <main>
        <Header />
        <About />
        <Bento />
      </main>
      {/* </div> */}
    </>
  );
}
