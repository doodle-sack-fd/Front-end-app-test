import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from '../../asyncActions/cats'
import { isCatlikedAction } from '../../store/catReducer'
import CatItem from '../catItem/CatItem'
import classes from './CatList.module.css'

const CatsList = () => {
    const dispatch = useDispatch()
    const isLiked = useSelector(state => state.cats.isLiked)
    const cats = useSelector(state => state.cats.cats)
    const isCatLiked = useSelector(state => state.cats.isCatLiked)

    const catsAndFacts = () => {
        if (!cats.length) {
            dispatch(fetchCats())
        }

        dispatch(isCatlikedAction(false))
    }

    const isLikedCats = () => {
        isCatLiked ? dispatch(isCatlikedAction(false)): dispatch(isCatlikedAction(true));
    }

    return (
        <div>
            <button className={classes.btn} onClick={isLikedCats}>лайкнутые</button>
            <button className={classes.btn} onClick={() => catsAndFacts()}>Показать котиков</button>
            <ul className={classes.cat__list}>
                <CatItem />
            </ul>
        </div>
    )
}

export default CatsList