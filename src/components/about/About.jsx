import React from 'react'
import classes from './About.module.css'

const About = () => {
    return (
        <div data-testid="about-page" className={classes.text}>
            <h1>Сервис по показу Бенгальских кошечек</h1>
            <p>Для Альфа-Банка</p>
            <p>г. Санкт-Петербург</p>
        </div>
    )
}

export default About