import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFromTo = () => {

    useGSAP(() => {
     gsap.fromTo('#orange-box', 
     {
        x: 0,
        rotation: 0,
        border: '0%',
     },
     {
        x: 250,
        repeat: -1,
        //means the animation will loop infinitely—it never stops unless you manually kill or pause it.
        yoyo: true, 
        // the yoyo property is used in conjunction with repeat to make animations reverse direction on every alternate cycle. 
        // Think of it like a yo-yo: it goes forward, then comes back.
        rotation: 360,
        duration: 2,
        borderRadius: '100%',
        // ease: 'bounce.inOut'
        // ease: 'power1.inOut'
        //  ease: 'elastic.inOut'
        ease: 'bounce.out',
     })
    },[])
// TODO : Implement the gsap.fromTo() method
    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white">GsapFromTo</h1>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.fromTo()</code> method is used to animate elements by specifying both the starting and ending states.
            </p>
            <p className="mt-5 text-gray-300">
                The <code className="bg-gray-800 px-1 text-yellow-300">gsap.fromTo()</code> method gives you complete control over both the starting and ending values of your animation. Unlike {""}
                <code className="bg-gray-800 px-1 text-yellow-300">gsap.to()</code> or <code className="bg-gray-800 px-1 text-yellow-300">gsap.from()</code>, which only let you define one end of the animation.
            </p>

            <p className="mt-5 text-gray-300">
                Read more about the {""}
                <a 
                    href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                    gsap.fromTo()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="orange-box" className="w-20 h-20 bg-orange-500 rounded-lg shadow-lg"/>
            </div>
        </main>
    )
}

export default GsapFromTo;
