import { motion } from "framer-motion"

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[15vw] leading-none font-['Founders Grotesk X-Condensed'] uppercase pt-10 mb-20"> . We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[15vw] leading-none font-['Founders Grotesk X-Condensed'] uppercase pt-10 mb-20"> . We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee