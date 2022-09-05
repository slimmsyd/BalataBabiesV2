
import styles from '../../styles/Heading.module.scss';
import Nav from './Nav/Nav';
export default function Heading({homeRef, aboutRef, teamRef,benefitsRef}) { 
    return ( 
        <>
           <div ref = {homeRef} class = {styles.headingWrapper}>
    
            <div className = {styles.header}>
                <h3>We are a collection of 6,222 NFTs on the Ethereum Blockchain. Get involved now.</h3>
                <button className = {styles.btnHeader}>Swing Into Action</button>
            </div>

          
        </div>

        </>
     
    )

}