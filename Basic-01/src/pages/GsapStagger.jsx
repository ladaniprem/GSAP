import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
    useGSAP(() => {
        gsap.to('.box', {
            y: 250,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "back.inOut",
           // stagger: 0.5,
            stagger: {
                amount: 1.5, // total duration for all elements
                grid: [2,1], // stagger in a grid layout
                axis: "y", // stagger along the y-axis
                ease: "circ.inOut", // easing function for stagger
                from: 'center'// start staggering from the center
            }
        });
    });

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white">Gsap Stagger</h1>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.to()</code> method with stagger effect allows you to animate multiple elements with a delay between each animation.
            </p>
            <p className="mt-5 text-gray-300">
                Stagger makes it easy to create sequential animations across multiple elements.
            </p>

            <p className="mt-5 text-gray-300">
                Read more about {""}
                <a 
                    href="https://greensock.com/docs/v3/Staggers"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                    GSAP Staggers
                </a>
            </p>

            <div className="mt-20 flex gap-4">
                <div className="box w-20 h-20 bg-red-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-blue-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-green-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-yellow-500 rounded-lg shadow-lg"/>
                <div className="box w-20 h-20 bg-purple-500 rounded-lg shadow-lg"/>
            </div>
        </main>
    );
};

export default GsapStagger;
