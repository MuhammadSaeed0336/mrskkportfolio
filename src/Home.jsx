import React from "react";
import MSaeed from "../src/images/MSaeed.jpg"
import Common from "./Common";


const Home =  () => {
  return(
    <>
    <section id="header">
    <Common 
    name="Grow Your Business with" 
    img={MSaeed} 
    visit="/services"
    btnname="Get Started"/>
    </section>
    </>
  );
}
export default Home;
