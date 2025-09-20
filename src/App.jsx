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
  })

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
               <div className="imagesDiv relative w-full h-screen">
                  <img src="./sky.png" alt="Image" className="absolute top-0 left-0 object-cover w-full h-full" />
                  <img src="./bg.png" alt="Image" className="absolute top-0 left-0 object-cover w-full h-full" />
                  <img src="./girlbg.png" alt="Image" className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40vw] " />
               </div>
           </div>
         </div>
      )}
    </div>
  )
}

export default App