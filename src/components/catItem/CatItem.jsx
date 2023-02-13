import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './CatItem.module.css'
import { isLikedAction, removeCatAction, unLikedAction } from '../../store/catReducer'

const CatItem = () => {

    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)
    const isLiked = useSelector(state => state.cats.isLiked)
    const isCatLiked = useSelector(state => state.cats.isCatLiked)

    const removeCat = (id) => {
        dispatch(removeCatAction(id))
    }

    const isLike = (cat) => {
        isLiked.some((elem) => elem.id === cat.id) ? dispatch(unLikedAction(cat)) : dispatch(isLikedAction(cat))
    }

    return (
        <>
            {isCatLiked && isLiked.map((cat, id) =>
                <li className={classes.cat__item} key={id}>
                    <p className={classes.title}>Лайкнутый котик</p>
                    <div role="img" aria-label="Изображение понравившихся котиков">
                        <img className={classes.img} src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                        {cat.breeds.map(i => <p key={i.id}>Порода: {i.name}</p>)}
                    </div>
                    <button className={classes.activeBtn} onClick={() => isLike(cat)}>❤︎</button>
                </li>
            )}

            {!isCatLiked && cats.map((cat, id) => {

                const isLikedHeart = isLiked.some((elem) => elem.id === cat.id)

                return <li className={classes.cat__item} key={id}>
                    <p className={classes.title}>Фотография милого котика!</p>
                    <div role="img" aria-label="Изображение котиков">
                        <img className={classes.img} src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                        {cat.breeds.map(i => <p key={i.id}>Порода: {i.name}</p>)}
                    </div>
                    <div>
                        <button className={isLikedHeart ? classes.activeBtn : classes.btn} onClick={() => isLike(cat)}>❤︎</button>
                        <button className={classes.btnTrash} onClick={() => removeCat(cat.id)}>🗑</button>
                    </div>
                </li>
            }
            )}
        </>
    )
}

export default CatItem 