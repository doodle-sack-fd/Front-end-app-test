import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from '../../asyncActions/cats'
import { isCatLikedAction, setIsFetching } from '../../store/catReducer'
import CatItem from '../catItem/CatItem'
import classes from './CatList.module.css'

const CatsList = () => {
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)
    const isCatLiked = useSelector(state => state.cats.isCatLiked)

    const catsAndFacts = () => {
        if (!cats.length) {
            dispatch(fetchCats())
        }
        dispatch(setIsFetching(false))
        dispatch(isCatLikedAction(false))
    }

    const isLikedCats = () => {
        isCatLiked ? dispatch(isCatLikedAction(false)) : dispatch(isCatLikedAction(true));
    }

    return (
        <div data-testid="cats-page">
            <button className={classes.btn} onClick={isLikedCats}>Лайкнутые котики</button>
            <button className={classes.btn} onClick={() => catsAndFacts()}>Показать котиков</button>
            <ul className={classes.cat__list}>
                <CatItem />
            </ul>
        </div>
    )
}

export default CatsList