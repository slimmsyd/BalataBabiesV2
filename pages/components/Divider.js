

import styles from '../../styles/Divider.module.scss';
import Image from 'next/image'; 
import BBEMOJI from '../../assets/BBEMOJI2.png';
export default function Divder() { 
    return ( 
        <div className = {styles.dividerWrapper}>
            <div className = {styles.imageDiv}>
                <Image  src = {BBEMOJI} />
            </div>
            <div>
                <h1 id  = "blue">Coming To <br /> A Metaverse  <br /> 2023 </h1>
            </div>
        </div>
    )
}