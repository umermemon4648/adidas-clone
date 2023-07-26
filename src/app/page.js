import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stars from './Components/Stars'
export default function Home() {
  return (
   <>

   <Navbar/>
   <Stars>
   <Hero/>
   </Stars>
   
   </>
  )
}
