import React, { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Test() {

    const [scrollYSuppressed, setScrollYSuppressed] = useState(true);

    const [key, setKey] = useState(0);
    return (
        <div className="w-full h-[100px] bg-lime-700">
            <PerfectScrollbar
                onScrollY={(container) =>
                    console.log(`scrolled to: ${container.scrollTop}.`)
                }
                key={key}
            >
                <div className="w-1/2 h-[180px] bg-black text-white flex justify-center items-center">
                    I am content
                </div>
            </PerfectScrollbar>

            <div>scrollYSuppressed: {scrollYSuppressed.toString()}</div>
            <button
                onClick={() => {
                    setScrollYSuppressed(!scrollYSuppressed);
                    setKey(key + 1);
                }}
            >
                Toggle Scroll Y
            </button>
        </div>
    );
}