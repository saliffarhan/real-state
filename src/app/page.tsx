"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Property from "@/components/Property"
import Benefits from "@/components/Benefits"
import Blog from "@/components/blog"
import Custumer from "@/components/custumer"
import Contact from "@/components/Conatc"
import Fotter from "@/components/fotter"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"


function Home() {
  useEffect (()=>{
    AOS.init({
      easing: "ease-in-out",
      duration: 1200,
      delay: 160,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    })
    AOS.refresh
  }, [])

  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Property/>
      <Benefits/>
      <Blog/>
      <Custumer/>
      <Contact/>
      <Fotter/>

    </div>
  )
}


export default Home