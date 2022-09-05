

import styles from '../../styles/Team.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';



export default function Team({teamRef}) { 
    return ( 
        <div ref = {teamRef} className = {styles.teamWrapper}> 
            <div className = {styles.teamHeader}>
                <h1>Meet The Team</h1>
                <p>This is the team and what we do </p>
            </div>

            <Swiper
              className = {styles.swiper}
              modules = {[Navigation,EffectFade]}
              navigation
              effect
              slidesPerView = {3}
              loop
            >
                <SwiperSlide>
                    <div className = {styles.teamCardWrapper}>
                        <div className = {styles.teamCard}>
                    
                    </div>
                        <p id = "title">Sydney Sanders</p>
                        <p>Sydney Sanders is the our Lead Web Developer</p>
                    </div>
               
                </SwiperSlide>
                <SwiperSlide>
                <div className = {styles.teamCardWrapper}>
                        <div className = {styles.teamCard}>
                    
                    </div>
                        <p id = "title">Sydney Sanders</p>
                        <p>Sydney Sanders is the our Lead Web Developer</p>
                    </div>
               
                </SwiperSlide>
                <SwiperSlide>
                <div className = {styles.teamCardWrapper}>
                        <div className = {styles.teamCard}>
                    
                    </div>
                        <p id = "title">Sydney Sanders</p>
                        <p>Sydney Sanders is the our Lead Web Developer</p>
                    </div>
               
                </SwiperSlide>




            </Swiper>
        
        </div>
    )
}