import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);


const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const box = gsap.utils.toArray(scrollRef.current.children);
        
        box.forEach((box, index) => {
            gsap.to(box, {
                x: 150 * (index + 5), // alternate direction for each box
                rotation: 360,
                borderRadius: "100%",
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: "top center", // start when the top of the box hits the center of the viewport
                    end: "top 10%", // end when the bottom of the box hits the center of the viewport
                    scrub: 1, // smooth scrubbing
                    toggleActions: "play none none reverse", // play on enter, reverse on leave
                    markers: true // helps with debugging
                },
                ease: "power1.inOut",
                duration: 1
            });
        });
    }, {scope: scrollRef});

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white">Gsap Scroll Trigger</h1>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">ScrollTrigger</code> plugin allows you to create animations that respond to scroll position.
            </p>
            <p className="mt-5 text-gray-300">
                Scroll down to see the animations.
            </p>

            <p className="mt-5 text-gray-300">
                Read more about {""}
                <a 
                    href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                    GSAP ScrollTrigger
                </a>
            </p>

            <div className="mt-20 grid grid-cols-1 gap-20" ref={scrollRef}>
                <div className="box w-20 h-20 bg-red-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-blue-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-green-500 rounded-lg shadow-lg"/>
            </div>
        </main>
    );
};
export default GsapScrollTrigger;
