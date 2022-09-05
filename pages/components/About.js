
import styles from '../../styles/About.module.scss'

export default function About({aboutRef}) { 
    return (
        <div ref = {aboutRef} className = {styles.aboutWrapper}>
            <div className = {styles.aboutImage}>
            </div>

            <div className = {styles.aboutText}>
                <h1>So.. <br></br>
                    Who Are We?
                </h1>
                <p>Balata Babies is a golf-theme  3D PFP NFT project. Why Balata Babies? The tropical Balata tree produce the sap that was used as in innards of golf ball called Balatas back in the day. 
</p>
                <p>A few examples of this program in action are: getting them involved with recreational activities, career pathways or jobs, money management, leadership groups, strengthening relationships and/or improving school involvement, providing healthy outlets, as well as funds to cover enrollment fees for 
</p>
            </div>
        </div>
    )
    
}