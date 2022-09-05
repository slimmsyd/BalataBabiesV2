
import styles from '../../../styles/Nav.module.scss'
import React, {useState} from 'react'
export default function Nav({teamRef, aboutRef, benefitsRef,roadMapRef, homeRef, accountAddress}) { 

    const [isOpen, setOpen] = useState(true); 
        //scroll to function 
        const handleScroll = (ref) => {
            window.scrollTo({
              top: ref.offsetTop,
              left: 0,
              behavior: "smooth",
            });
    
            setOpen(!isOpen)
            console.log("Is this being clicked?")
          };

    function openMenu() { 
        setOpen(!isOpen)
        console.log(isOpen)
    }


    const navigationMenu = () => { 
        if(!isOpen) { 
            return( 

        <div className = {`${styles.hamburgerDiv} ${styles.hamburgerDivShown}`}>
            <ul>
                <h4 onClick={() => handleScroll(aboutRef.current)}>About</h4>
                <h4  onClick={() => handleScroll(teamRef.current)}>Team</h4>
                <h4 onClick={() => handleScroll(roadMapRef.current)} >Roadmap</h4>
                <h4 onClick={() => handleScroll(benefitsRef.current)} >Benefits</h4>
                <h4>Address: {accountAddress} </h4>
            </ul>

        </div>

            )
        }else { 
            return(
                <div className = {styles.hamburgerDiv}></div>
            )
        }
    }





    return (
        <>
             <nav className = {styles.nav}>
                <p onClick={openMenu}>{`${isOpen ? "Menu" : 'Close'}`}</p>

        </nav>
        {navigationMenu()}
        </>
   
    )
}