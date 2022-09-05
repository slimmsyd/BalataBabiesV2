
import styles from '../../styles/Footer.module.scss';
import Image from 'next/image';
import InstagramIcon from '../../public/assets/TwitterIcon.png';
import TwitterIcon from '../../public/assets/InstagramIcon.png';
import DiscordIcon from '../../public/assets/DiscordIcon.png';
import Link from 'next/link';
export default function Footer() { 
    return ( 
        <footer className = {styles.footerWrapper}>
            <div className = {styles.footerHeading}>
                <button className  = {styles.btn}>Mint Now</button>
                <ul>
                    <li>
                        <Link href = "#">
                            <Image width={24} height = {24} src = {InstagramIcon} />
                        </Link>
                    </li>
                    <li>
                        <Link href = '#'>
                            <Image width={24} height = {24}  src = {TwitterIcon} />
                        </Link>
                    </li>
                    <li>
                        <Link href = "#">
                            <Image width={24} height = {24}  src = {DiscordIcon} />
                        </Link>
                    </li>
                  
                </ul>
                <ul>
                    <li>
                        Menu
                    </li>
                    <li>
                        Contact Us 
                    </li>
                    <li>
                        Merch
                    </li>
                    <li>
                        Metaverse
                    </li>
                </ul>
            </div>
        </footer>
    )
}