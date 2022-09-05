

import styles from '../../styles/Card.module.scss';
import Image from 'next/image';
import BB2 from '../../public/assets/BB2.png'
import BB3 from '../../public/assets/BB3.png'
import BB4 from '../../public/assets/BB4.png'
import BB5 from '../../public/assets/BB5.png'

export default function Card() { 
    return(
        <div className = {styles.cardWrapper}>
            <div className  ={styles.card1}>
            </div>
            <div className  ={styles.card2}>

            </div>
            <div className  ={styles.card3}>

            </div>
            <div className  ={styles.card4}>
                
            </div>

        </div>

    )

}