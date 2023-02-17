'use client';
import {motion} from 'framer-motion'
import styles from '../styles'
import {TypingText,TitleText,StartSteps} from '../components'

import {staggerContainer,fadeIn} from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once:'false', amount:0.25}}
   className={`${styles.innerWdith} max-auto flex  flex-col `}
  
  >
    <TypingText title ="|People on the World"textStyles="text-center" />

    <TitleText title={(<> 
      Track friends around you and invite them to play together in the same world

      </>)}
      textStyles="text-center" 
      />
      <motion.div
      variant={fadeIn('up','tweeen', 0.3, 1)}
      className="relative mt-[68px] flex w-full h0[550px]"
>
      <img src="/map.png" alt="map"
      className='w-full h-full object-cover' />

      <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
        <img src="people-01.png" alt="people"
        className='w-full h-full '  />

      </div>
            <img src="/icon1.png z-50" alt="" />

      <div className='absolute top-[15%] right-[25%] sm:max-w-[100px] sm:max-h-[100px] w-[200px] h-[150px] rounded-[20px] p-[6px] rounded-full bg-[#5d6680]  '>
        
        <img src="labs.png" alt="people"
        className='w-full h-full rounded-[20px] object-fill '  />
      
       <div className='sm:m-[10px] m-[40px] sm:text-[10px]  text-white absolute font-normal text-[20px] font-extrabold  top-[70%]'>Hawkins Labs</div>
       <div className='   text-white relative font-normal text-[8px] font-normal  bottom-1/2 '> 
<h4 className=' flex flex-row text-[10px] left-[40%]  absolute '>+364 have joined</h4>
       <img src="/icon1.png " alt="" className='sm:max-w-[20px] z-1 absolute left-[18%] ' />
       <img src="/icon2.png " alt="" className='sm:max-w-[20px] z-1 absolute left-[10%]' />
       <img src="/icon3.png " alt="" className='sm:max-w-[20px] z-1 absolute left-[%]' />
       </div>

      </div>
      <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
        <img src="people-02.png" alt="people"
        className='w-full h-full ' 
         />
      </div>
      <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
        <img src="people-03.png" alt="people"
        className='w-full h-full ' 
         />
      </div>
      </motion.div>
    </motion.div>
    </section>
);

export default World;
