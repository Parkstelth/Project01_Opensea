import React from "react";
import { useState, useEffect } from "react";
// import "./Home.css";
import "./HomeComponent/Home.css";
import HomeComponent1 from "./HomeComponent/HomeComponent1";
import HomeComponent2 from "./HomeComponent/HomeComponent2";
import Footer from "./HomeComponent/Footer";

function Home({ account }) {
    return (
        <div>
            <div>
                <div className="background"></div>
            </div>

            <HomeComponent1 />

            {/* <div>{account}</div> */}
            <HomeComponent2 />

            <Footer />
        </div>
    );
}

export default Home;
