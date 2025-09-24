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
    if(!showContent) return;
    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky.img", {
      rotate: 0,
      scale: 1.4,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg-img", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".Gimg", {
      bottom: "-25%",
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })

     const main = document.querySelector(".main");

    //  main?.addEventListener("mousemove", function(e) {
    //    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
    //    gsap.to(".imagesDiv .text-d", {
    //       x: `${ -50 - xMove}%`,
    //    })
    //    gsap.to(".imagesDiv .sky-img", {
    //       x: xMove,
    //    })
    //    gsap.to(".imagesDiv .bg-img", {
    //       x: xMove * 0.3,
    //    })
    //  })
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
         <div className="main w-full rotate-[-20deg] scale-[1.5]">
           <div className="landing w-full h-screen bg-[#000] overflow-hidden relative">
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
                  <img src="./sky.png" alt="Image" className="sky-img absolute scale-[1.5] rotate-[-10deg] top-0 left-0 object-cover w-full h-full" />
                  <img src="./bg.png" alt="Image" className="bg-img absolute scale-x-[1.8] rotate-[-3deg] top-0 left-0 object-cover w-full h-full" />

                  <div className="text-d flex flex-col gap-[25vh] text-white absolute top-[15%] left-1/2 -translate-x-1/2">
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 -ml-5'>grand</h1>
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 ml-70'>theft</h1>
                     <h1 className='text-[8rem] uppercase font-[900] leading-0 -ml-5'>auto</h1>
                  </div>

                  <img src="./girlbg.png" alt="Image" className="Gimg absolute top-[10%] bottom-[-150%]  left-1/2 -translate-x-1/2 w-[40vw] scale-[3] rotate-[-20deg] " />
               </div>
               <div className="btmBar w-full py-4 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent pl-5">
                  <div className="bicon flex gap-1 text-white items-center">
                      <i className="ri-arrow-down-double-line text-[1.4rem]"></i>
                      <h3 className="uppercase text-[0.9rem] font-[900] leading-0 text-center">Scroll Down</h3>
                  </div>
                  <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
               </div>
           </div>
           <div className="page-2 w-full h-screen flex item-center justify-center bg-black">
               <div className="p2-container w-full h-[80%] mt-20 flex justify-center gap-[30px]">
                   <div className="left-img relative h-full w-[40vw]">
                      <img src="./imag.png" alt="" className="p2-l-i absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   </div>
                   <div className="p2-content w-[40vw] pt-6">
                       <h1 className="text-[2.8rem] font-[900] leading-[8vh] uppercase text-white ">still running,</h1>
                       <h1 className="text-[2.8rem] font-[900] leading-[8vh] uppercase text-white ">not hunting</h1>
                       <p className="text-[1rem] font-[500] uppercase text-white w-[85%] mt-4">
                           want to get an early look at the game? sign up for the gta6 newsletter 
                           to receive exclusive updates, trailers, and more.
                       </p>
                       <p className="text-[1rem] font-[500] uppercase text-white w-[85%] mt-4 "> 
                          GTA VI is the latest installment in the Grand Theft Auto series, 
                          offering an expansive open world, engaging storylines, and immersive gameplay.
                       </p>
                       <button className="btn bg-yellow-500 text-[1.4rem] text-black rounded-[6px] px-4 py-1 mt-6 cursor-pointer mr-5">Sign in </button>
                       <button className="btn bg-yellow-500 text-[1.4rem] text-black rounded-[6px] px-4 py-1 mt-6 cursor-pointer ">Download</button>
                   </div>
               </div>
           </div>
         </div>
      )}
    </div>
  )
}

export default App