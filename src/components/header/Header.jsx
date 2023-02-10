import React from 'react'
import classes from './Header.module.css'

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__title}>
                    <a href='' className={classes.header__left}>
                        Главная
                    </a>
                    <a href='' className={classes.right}>
                        К котикам!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header