import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFrom = () => {

    useGSAP(() => {
     gsap.from('#green-box', {
        x: 250,
        repeat: -1,
        //means the animation will loop infinitely—it never stops unless you manually kill or pause it.
        yoyo: true, 
        // the yoyo property is used in conjunction with repeat to make animations reverse direction on every alternate cycle. 
        // Think of it like a yo-yo: it goes forward, then comes back.
        rotation: 360,
        duration: 2,
        // ease: 'bounce.inOut'
         ease: 'power1-inOut'
        //  ease: 'elastic.inOut'
     })
    },[])
// TODO : Implement the the gsap.to() method
    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white">GsapFrom</h1>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.from()</code> method is used to animate elements from a new state to their current state.
            </p>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.from()</code> method is similar to the {""}
                <code className="bg-gray-800 px-1 text-yellow-300">gsap.to()</code> method, but the difference is that the {""}
                <code className="bg-gray-800 px-1 text-yellow-300">gsap.from()</code> method animates elements from a new state to their current state, while the <code className="bg-gray-800 px-1 text-yellow-300">gsap.to()</code> method animates
                elements from their current state to a new state.
            </p>

            <p className="mt-5 text-gray-300">
                Read more about the {""}
                <a 
                    href="https://greensock.com/docs/v3/GSAP/gsap.from()"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                    gsap.from()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg shadow-lg"/>
            </div>
        </main>
    )
}

export default GsapFrom;