import React, { useState } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';


function App() {
  
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function() {
          if(this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
    })
  });

  useGSAP(() => {
     const main = document.querySelector(".main");

     main?.addEventListener("mousemove", function(e) {
      console.log(e);
     })
  },[showContent]);


  return (
    <div>
      <div className="svg fixed top-0 left-0 z-[99] w-full h-screen overflow-hidden bg-[#000] ">
           <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
               <defs>
                   <mask id="viMask">
                      <rect width="100%" height="100%" fill="black" />
                      <g className="vi-mask-group">
                          <text
                              x="50%"
                              y="40%"
                              fontSize="250"
                              textAnchor="middle"
                              fill="white"
                              dominantBaseline="middle"
                              fontFamily="Arial Black"
                            >
                              VI
                          </text>
                      </g>
                   </mask>
               </defs>
               <image href="./bg.png"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#viMask)"
                />
           </svg>
      </div>
      {showContent && (
         <div className="main w-full">
           <div className="landing w-full h-screen bg-[#000]">
               <div className="navBar absolute top-0 left-0 z-[10] w-full h-[11vh]">
                 <div className="logo flex gap-4 align-center justify-center absolute top-1/2 left-5 -translate-y-1/2">
                    <div className="lines flex flex-col align-center justify-center gap-[2px] cursor-pointer">
                       <div className="line h-[3px] w-8 bg-white"></div>
                       <div className="line h-[3px] w-5 bg-white"></div>
                       <div className="line h-[3px] w-3 bg-white"></div>
                    </div>
                    <h3 className="logo-text text-[2rem] text-white font-[900]">ROCKSTAR</h3>
                 </div>
               </div>
               <div className="imagesDiv relative w-full h-screen overflow-hidden">
                  <img src="./sky.png" alt="Image" className="absolute top-0 left-0 object-cover w-full h-full" />
                  <img src="./bg.png" alt="Image" className="absolute top-0 left-0 object-cover w-full h-full" />

                  <div className="text-d flex flex-col gap-[25vh] text-white absolute top-[15%] left-1/2 -translate-x-1/2">
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 -ml-5'>grand</h1>
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 ml-70'>theft</h1>
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 -ml-5'>auto</h1>
                  </div>

                  <img src="./girlbg.png" alt="Image" className="Gimg absolute top-[10%] left-1/2 -translate-x-1/2 w-[40vw] " />
               </div>
               <div className="btmBar w-full py-4 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent pl-5">
                  <div className=" flex gap-1 text-white items-center">
                      <i className="ri-arrow-down-double-line text-[1.4rem]"></i>
                      <h3 className="uppercase text-[0.9rem] font-[900] leading-0 text-center">Scroll Down</h3>
                  </div>
                  <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
               </div>
           </div>
         </div>
      )}
    </div>
  )
}

export default App