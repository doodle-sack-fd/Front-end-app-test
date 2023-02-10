import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCats, fetchFacts } from '../../asyncActions/cats'
import CatItem from '../catItem/CatItem'
import classes from './CatList.module.css'

const CatsList = () => {
    const dispatch = useDispatch()

    const catsAndFacts = () => {
        dispatch(fetchCats())
        dispatch(fetchFacts())
    }

    return (
        <div>
            <button className={classes.btn} onClick={() => catsAndFacts()}>Показать котиков</button>
            <ul className={classes.cat__list}>      
                <CatItem />
            </ul>
        </div>
    )
}

export default CatsList