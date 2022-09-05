
import styles from '../../styles/Join.module.scss'
import Image from 'next/image'; 
import DiscordBlue from '../../public/Icons/Discord Logo_Blue.png'
export default function JoinSection() { 
    return ( 

    <div className = {styles.joinWrapper}>
        <div className = {styles.joinDiv}>
            <h1>Greatest Game <br /> In The World</h1>
            <p>
            The Greatest Game Ever Played is a 2005 American biographical sports film based on the early life of amateur golf champion Francis Ouimet and his surprise winning of the 1913 U.S. Open. The film was directed by Bill Paxton, and was his last film as a director. Shia LaBeouf plays the role of Ouimet. The film’s screenplay was adapted by Mark Frost from his 2002 book, The Greatest Game Ever Played: Harry Vardon, Francis Ouimet, and the Birth of Modern Golf. It was shot in Montreal, Quebec, Canada, with the Kanawaki Golf Club,[2] in Kahnawake, Quebec, the site of the golf sequences.
            </p>
            <button class = "btn">JOIN DISCORD <Image src = {DiscordBlue} width = {50} height = {50} /></button>
        </div>

    </div>

)


}