import React from "react";
import abtImg from "../src/images/abtImg.png";
import Common from "./Common";


const About =  () => {
  return(
    <>
    <section id="header">
    <div className="about-sec">
    <Common 
    name="Welcom to About Page   " 
    img={abtImg} 
    visit="/contact"
    btnname="Contact Now"/>
    </div>
    </section>
    </>
  );
}
export default About;
