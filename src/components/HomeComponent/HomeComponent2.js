import React from "react";
import "./Home2.css";

function HomeComponent2() {
    return (
        <div className="secondComponent">
            <div className="secondComponentInside">
                <p className="firstContent">Meet Opensea</p>
                <p className="secondContent">The NFT marketplace with everything for everyone</p>
                <div className="thirdContent">
                    <div className="thirdContent1">
                        <iframe
                            width="616"
                            height="345"
                            src="https://www.youtube.com/embed/gfGuPd1CELo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    {/* <video
                        className="thirdContent1"
                        tabindex="-1"
                        class="video-stream html5-main-video"
                        webkit-playsinline=""
                        playsinline=""
                        controlslist="nodownload"
                        src="blob:https://www.youtube.com/f0b71952-61c0-44ef-914a-e59dc843ab39"
                    ></video> */}

                    <p className="thirdContent2">Fiat on-ramp and profile customization is coming soon.</p>
                </div>
                <div className="fourthContent">
                    <div className="fourthContent1">Explore the marketplace</div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent2;
