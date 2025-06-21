import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
 

  return (
    <>
      <div className='flex-center h-[100vh]'>
        <h1 className='text-3xl text-indigo-300'>Hello GSAP with Mojito</h1>
      </div>
    </>
  )
}

export default App
