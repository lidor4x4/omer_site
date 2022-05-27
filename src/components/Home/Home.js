import React from 'react'
import { motion } from "framer-motion"
import "./Home.scss"
import homeTop from "./Home_top.png"
import Card from "./Card.png"

export default function Home() {
  return (
    <div className='home-container'>
        <div className='hero-section'id="home">
          <img className='home-top-img' src={homeTop} alt="home top img" />
          {/*Adding navbar here because it need to be on the img*/}
          <a href='#home'><motion.h3 whileHover={{scale: 1.1}} className='navbar-item-1'>Home Page</motion.h3></a>
          <a href="#about-me"><motion.h3 whileHover={{scale: 1.1}} className='navbar-item-2'>About</motion.h3></a>
          <a><motion.h3 whileHover={{scale: 1.1}} className='navbar-item-3'>Portfolio</motion.h3></a>
          <a><motion.h3 whileHover={{scale: 1.1}} className='navbar-item-4'>Content Creators</motion.h3></a>
          <a><motion.h3 whileHover={{scale: 1.1}} className='navbar-item-5'>Recommends</motion.h3></a>
          <motion.h1 className='text-top-title'>Omer Designs</motion.h1>
          <h3 className='text-top-desc'>מעצב גרפי</h3>
        </div>
        <div className='why-us-cards-continer'>
          <motion.img  className='card-1 shadow-lg' src={Card}/>
          <motion.img className='card-2 shadow-lg' src={Card}/>
          <motion.img className='card-3 shadow-lg' src={Card}/>
        </div>
        <div className='about-me-container' id="about-me">
          <h1 className='about-me-title'>אודות</h1>
          <p className='about-me z-10 m-0'>.עומר, ממרכז הארץ, מתמחה בעיצוב גרפי ובאיור דיגיטלי מזה שנתיים</p>
          <p className='about-me z-10 m-0'>.זכיתי לעבוד עם מספר רב של יוצרי תוכן בתעשיית היוטיוב בישראל, ועם מגון עסקים ברחבי המדינה</p>
          <p className='about-me z-10 m-0'>עיצוב גרפי מייצג את העסק שלך, חשוב לשמור על קו עיצובי חדשני</p>
          <p className='about-me z-10 m-0'>.שימצא חן בעייני הלקוח</p>        
        </div>
    </div>
  )
}


