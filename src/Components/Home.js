import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Language from "./LanguageSkills";
import Projects from "./Projects";
import Social from "./Social";

const Home = () => {

return (
    <>
        <main className="content-wrapper">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <About></About>
                        <Projects></Projects>
                        <Education></Education>
                        <Language></Language>
                        <Social></Social>
                        <Contact ></Contact>
                        <Footer></Footer>

                    </div>
                </div>
            </div>

        </main>

    </>
)

}
export default Home;