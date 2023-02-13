import React from 'react'
import classes from './Header.module.css'
import {Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__title}>
                    <Link to='/about' className={classes.header__link}>
                        Главная
                    </Link>
                    <Link to='/cats' className={classes.header__link}>
                        К котикам!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header