import React from 'react'
import { useSelector } from 'react-redux'
import classes from './CatItem.module.css'

const CatItem = () => {

    const cats = useSelector(state => state.cats.cats)

    return (
        <>
            {cats.map((cat, id) =>
                <li className={classes.cat__item} key={id}>
                    <p>Фотография милого котика!</p>
                    <img src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                </li>
            )}
        </>
    )
}


export default CatItem 