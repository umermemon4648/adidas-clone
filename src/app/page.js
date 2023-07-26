import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stars from './Components/Stars'
import ShirtsCanvas from './Components/Shirts'
import JacketCanvas from './Canvas/JacketCanvas'
export default function Home() {
  return (
  //  <ShirtsCanvas>

  <>

   <Navbar/>
   <Stars>
   <Hero/>
   <ShirtsCanvas/>
   </Stars>
   <JacketCanvas/>

  </>

  )
}
