

import styles from '../../styles/Benefits.module.scss'
import Image from 'next/image';
import PFP from '../../public/Icons/Profile Pic Icon.png'
import Merch from '../../public/Icons/Merch Icon.png'
import Airdrop from '../../public/Icons/Airdrop.png'
import Meta from '../../public/Icons/Meta Icon.png';
import Club from '../../public/Icons/Golf Club Icon.png'
export default function Benefits({benefitsRef}) { 
    return ( 
        <div ref = {benefitsRef} className = {styles.benefitsWrapper}>
            <div className = {styles.headerTop}>
                <h1>Benefits</h1>
            </div>

            <div className = {styles.topDiv}>
                <div>
                    <Image width={100} height = {100} src = {PFP}></Image>
                    <p>3D PFP all social media</p>
                </div>
                <div>
                    <Image  width={100} height = {100}  src = {Merch}></Image>
                    <p>3D PFP all social media</p>
                </div>
                <div>
                    <Image width={100} height = {100}  src = {Airdrop}></Image>
                    <p>3D PFP all social media</p>
                </div>
            </div>

            <div className = {styles.bottomDiv}>
            <div>
                    <Image width={100} height = {100} src = {Meta}></Image>
                    <p>3D PFP all social media</p>
                </div>
                <div>
                    <Image  width={100} height = {100}  src = {Club}></Image>
                    <p>3D PFP all social media</p>
                </div>
            
            </div>

        </div>
    )

}