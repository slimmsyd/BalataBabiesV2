import styles from '../../styles/Inspire.module.scss'
import BBLarge from '../../public/assets/BBLarge.png'
import Image from 'next/image';
export default function Inspire() { 
    return ( 

        <div className = {styles.joinWrapper}>
            <div className = {styles.joinDiv}>
                <h1>Inspire <br /> The Youth</h1>
                <p>
                The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of amateur golf champion Francis Ouimet and his surprise winning of the 1913 U.S. Open. The film was directed by Bill Paxton, and was his last film as a director. Shia LaBeouf plays the role of Ouimet. The film’s screenplay was adapted by Mark Frost from his 2002 book, The Greatest Game Ever Played: Harry Vardon, Francis Ouimet, and the Birth of Modern Golf. It was shot in Montreal, Quebec, Canada, with the Kanawaki Golf Club,[2] in Kahnawake, Quebec, the site of the golf sequences.
                </p>
                <button class = "btn">JOIN THE CLUB</button>
            </div>
            <div className = {styles.imageDiv}>
                <Image  src = {BBLarge} />

            </div>

            
    
        </div>
    
    )

}