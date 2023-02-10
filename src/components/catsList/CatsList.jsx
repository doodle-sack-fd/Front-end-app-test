import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCats } from '../../asyncActions/cats'
import CatItem from '../catItem/CatItem'
import classes from './CatList.module.css'

const CatsList = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(fetchCats())}>Получить котов</button>
            <ul className={classes.cat__list}>
                <CatItem />
            </ul>
        </div>
    )
}

export default CatsList