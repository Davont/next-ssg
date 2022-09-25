import pageStyle from "./index.module.scss";
import Nav from "@/components/nav";
function About() {
  return (
    <div className={pageStyle["P-index"]}>
      <Nav />
      <h1>About</h1>
    </div>
  );
}

export default About;
