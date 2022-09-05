import Image from "next/image"
import Twitter from '../../assets-icons/twitter-icon.png';
import Discord from '../../assets-icons/discord-icon.png';
import Opensea from '../../assets-icons/opensea-icon.png';
import Instagram from '../../assets-icons/instagram-icon.png';
import styles from '../../styles/Links.module.scss';
import Link from 'next/link';

export default function Links() { 
    return ( 
        <div className = {styles.links}>
            <ul>
                <li>
                   <Link href = "#">
                    <Image width={32} height ={32} src = {Twitter}></Image>
                    </Link> 
                </li>
                <li>
                    <Link href = "#">
                        <Image width={32} height ={32}  src = {Discord}></Image>
                    </Link>
                </li>
                <li>
                    <Link href = "#">
                        <Image width={32} height ={32}  src = {Opensea}></Image>
                    </Link>
                </li>
                <li>
                    <Link href = "#">
                        <Image width={32} height ={32}  src = {Instagram}></Image>
                    </Link>
                </li>
            </ul>
        </div>


    )

}