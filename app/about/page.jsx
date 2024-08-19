"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useContext } from "react"
import { CusorContext } from "@/components/CusorContext"
import StatsItem from "@/components/StatsItem"
const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CusorContext)
  return (
    <motion.section onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between "> 
          {/* image */}
          <motion.div initial={{opacity: 0, x:-60}} animate={{opacity: 1,x:0, transition: {delay: 2, duration: 0.8, ease: "easeInOut"}}} className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0">
            <Image src="/assets/about/img.jpg" fill quality={100} priority alt="" className="object-contain"/>
           
          </motion.div>
           {/* text */}
           <motion.div initial={{opacity: 0, x: 60}} animate={{opacity: 1,x:0, transition: {delay: 2.4, duration: 0.8, ease: "easeInOut"}}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
              <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Committed to Your Skin's health and Beauty</h2>
              <p className="lead max-w-[600px] mx-auto xl:mx-0 ">Tailored skincare solutions for a healthy complextion, offering customized care for radiant skin</p>
              {/* items */}
              <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
                <div>
                  <StatsItem countNum={13} text="Years on Market"/>
                </div>
                <div> <StatsItem countNum={35} countText="k+" text="Happy Clients"/></div>
                <div>  <StatsItem countNum={100} countText="%" text="Natural Ingredients"/></div>
            
              </div>
              {/* btn */}
              <button className="btn mx-auto xl:mx-0">Contact us</button>
            </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About