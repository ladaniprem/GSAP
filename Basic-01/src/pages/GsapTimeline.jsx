import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
   const timeline = gsap.timeline({
       repeat: -1,
       repeatDelay: 1,
       yoyo: true
   });

    useGSAP(() => {
       timeline.to('#red-box', {
        x:250,
        rotation:360,
        borderRadius: "100%",
        duration: 2,
        ease : "back.inOut",
       })
       
       timeline.to('#red-box', {
        y:250,
        rotation:360,
        borderRadius: "100%",
        duration: 2,
        ease : "back.inOut",
       })

        timeline.to('#red-box', {
        x:500,
        rotation:360,
        borderRadius: "8px",
        duration: 2,
        ease : "back.inOut",
       })
    }, {
        dependencies: [timeline]
    });

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white">Gsap Timeline</h1>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.timeline()</code> method allows you to sequence multiple animations.
            </p>
            <p className="mt-5 text-gray-300">
                Timelines make it easy to coordinate multiple animations and precisely control their timing and sequence.
            </p>

            <p className="mt-5 text-gray-300">
                Read more about the {""}
                <a 
                    href="https://greensock.com/docs/v3/GSAP/Timeline"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                    gsap.timeline()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg shadow-lg"/>
                <div className="mt-8">
                    <button 
                        onClick={() => {
                            if (timeline.paused()) {
                                timeline.play();
                            } else {
                                timeline.pause();
                            }
                        }}
                        className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 font-medium"
                    >   Play/
                        {timeline.paused() ? 'Play' : 'Pause'}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default GsapTimeline;
