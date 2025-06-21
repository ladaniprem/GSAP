import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const GsapText = () => {
useEffect(() => {
  gsap.to('#text', {
    ease: "power1.inOut",
    opacity:1, //  refers to the transparency level of an element. It works just like the CSS opacity property, where:
// 1 means fully visible (opaque)
 // 0 means fully invisible (transparent)
    y:0,
  })

  gsap.fromTo('.para', {
   opacity:0,
   y:20,
  }, 
  {
    opacity:1,
    y:0,
    delay: 1,
     stagger: 0.1,
  })
}, []);
    

  return (
    <main className="min-h-screen bg-gray-950 p-8 bg-gradient-to-b from-gray-950 to-black">
      <h1 id="text" className="opacity-0 translate-y-10 text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        GsapText
      </h1>

      <p className="mt-5 text-white para">
        We can use same method like <code className="bg-gray-900 px-1 rounded text-yellow-300">gsap.to()</code>,{" "}
        <code className="bg-gray-900 px-1 rounded text-yellow-300">gsap.from()</code>, <code className="bg-gray-900 px-1 rounded text-yellow-300">gsap.fromTo()</code> and{" "}
        <code className="bg-gray-900 px-1 rounded text-yellow-300">gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-white para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-white para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-white para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="text-yellow-300 hover:text-blue-300 underline decoration-dotted hover:decoration-solid"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};
  
  export default GsapText;
