import React from 'react'

function App() {
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
    </div>
  )
}

export default App