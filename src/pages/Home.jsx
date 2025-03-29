import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import copaProfile from '../assets/profile_dominic.jpg'
import copiProfile from '../assets/profile_tom.jpg'
import { ShootingStars } from './../components/ui/shooting-stars';
import { StarsBackground } from './../components/ui/stars-background';

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const profileHeight = useTransform(scrollYProgress, [0, 1], ["600px", "0px"]);
  const profileTextHeight = useTransform(scrollYProgress, [0.2, 0.8], ["90px", "0px"]);

  return (
    <div className='w-full h-[400vh]'>
      <div className='w-full h-[100vh]'>
      <div className="h-full bg-neutral-900 flex flex-col items-center justify-center relative w-full overflow-hidden">
      <h2 className="relative z-10 text-3xl md:text-5xl font-medium text-center tracking-tight flex items-center gap-2 md:gap-8">
  <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
    Shooting Star
  </span>
  <span className="text-white text-lg font-thin">x</span>
  <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
    Star Background
  </span>
</h2>

  <div className="absolute inset-0">
    <ShootingStars />
    <StarsBackground />
  </div>
</div>

      </div>
      <div className='w-full h-[300vh] bg-black text-white'>
        <div className='w-full h-screen flex justify-center items-center'>
          <p className='text-[150px] w-[70%] leading-[1] font-medium'>PASSION FOR EXCELLENCE + IMMERSIVE TECH IS AT OUR CORE</p>
        </div>
        <div ref={ref} className='w-full h-[200vh] relative'>
          <div className='sticky top-0 left-0 w-full h-screen flex justify-center items-center overflow-hidden'>
            <div id='profile-photo' className='w-[500px] h-[600px] relative'>
              <motion.div style={{ height: profileHeight }} className='w-[500px] h-[600px] overflow-hidden'>
                <img className='w-[500px] h-[600px] object-cover' src={copaProfile} />
              </motion.div>
              <img className='w-[500px] h-[600px] object-cover absolute top-0 left-0 -z-10' src={copiProfile} />
            </div>
            <motion.h3
              initial={{ left: "0%" }}
              animate={{ left: "-150%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className='absolute leading-[0.7] -z-30 text-[120px] h-[90px] font-semibold left-0 top-1/2 -translate-y-1/2 text-nowrap capitalize'>
              AKANKSHA VERMA AKANKSHA VERMA AKANKSHA VERMA AKANKSHA VERMA AKANKSHA VERMA
            </motion.h3>
            <motion.div style={{ height: profileTextHeight }} className='absolute w-full h-[200px] -z-20 left-0 top-1/2 -translate-y-1/2 bg-black overflow-hidden flex items-center'>
              <motion.h3
                initial={{ left: "0%" }}
                animate={{ left: "-150%" }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className='relative leading-[0.67] top-0 left-0 text-[120px] font-semibold text-nowrap capitalize'>
                JAYANT CHAWLA JAYANT CHAWLA JAYANT CHAWLA JAYANT CHAWLA JAYANT CHAWLA
              </motion.h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
