import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Service =  () => {
  return(
    <>
    <section id="header">
    <div className="my-0">
       <h1 className="text-center pt-5 ">Our Services</h1>
    </div>
    <div className="container-fluid pb-5">
     <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
            <div className="row gy-4">
                {
                    Sdata.map((val, ind) => {
                        return (
                        <Card key={ind} imgsrc={val.imgsrc} title={val.title} contact={val.contact}/>
                    )})}
            </div>
        </div>
      </div>
     </div>
    </div>
    </section>
    </>
  );
}
export default Service;