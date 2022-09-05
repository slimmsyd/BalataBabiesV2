

import styles from '../../styles/Roadmap.module.scss';
import Image from 'next/image';
import React, {useState} from 'react'; 

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import Image1 from '../../assets/Image_1.png';
import Image2 from '../../assets/Image_2.png';
import Image3 from '../../assets/Image_3.png';
import Image4 from '../../assets/Image_4.png';
import CART from '../../assets/CART.png';

export default function RoadMap({roadMapRef}) { 
    
    //we are going to have to showcase the images we want ot show 




    
    return ( 
        
        <section ref = {roadMapRef} className = {styles.sectionWrapper}>

        <Swiper
            effect
            loop

        >
            <SwiperSlide>
                <div className = {styles.div}>
                <div className = {styles.imageDiv}>
                    
                    <Image src = {CART} />
                    </div>
                    <p>The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of.</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                
                <div className = {styles.div}>
                <div className = {styles.imageDiv}>

                    <Image src = {Image1} />
                    </div>
                    <p>The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of.</p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className = {styles.div}>
                <div className = {styles.imageDiv}>

                    <Image src = {Image2} />
                    </div>
                    <p>The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of.</p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className = {styles .div}>

                    <div className = {styles.imageDiv}>
                        <Image  src = {Image3} />
                    </div>
                    <p>The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of.</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className = {styles.div}>
                <div className = {styles.imageDiv}>

                    <Image  src = {Image4} />
                    </div>
                    <p>The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of.</p>

                </div>
            </SwiperSlide>



        </Swiper>


        {/* <Swiper
            className = {styles.swiper}
            modules = {[Navigation,EffectFade]}
            navigation
            effect
            loop
        >
                <SwiperSlide className = {styles.swiperSlider}>
                    <Image  src = {Image1}></Image>

                    <div>
                        <h1>Collection Drop</h1>
                    <p>Tell me all about the world that which came before....</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className = {styles.swiperSlider}>
                    <Image src = {Image2}></Image>
                    <p>Tell me all about the world that which came before....</p>
                </SwiperSlide>
                <SwiperSlide className = {styles.swiperSlider}>
                    <Image src = {Image3}></Image>
                    <p>Tell me all about the world that which came before....</p>
                </SwiperSlide>
                <SwiperSlide className = {styles.swiperSlider}>
                    <Image src = {Image4}></Image>
                    <p>Tell me all about the world that which came before....</p>
                </SwiperSlide>
      
              
               
       
               

        </Swiper>



  */}

  


    </section>

    )
        
}