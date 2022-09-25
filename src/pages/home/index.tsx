import pageStyle from "./index.module.scss";
import header from "@/assets/header.jpeg";
import Image from "next/image";
import Nav from "../../components/nav";
function Home() {
  return (
    <div className={pageStyle["P-index"]}>
      <Nav />
      <h1>Home</h1>
      <div className={pageStyle.image}>
        <Image src={header} alt="" />
      </div>
    </div>
  );
}

export default Home;
