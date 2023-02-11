import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './CatItem.module.css'
import { isLikedAction, removeCatAction, unLikedAction } from '../../store/catReducer'

const CatItem = () => {

    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)
    const isFetching = useSelector(state => state.cats.isFetching)
    const isLiked = useSelector(state => state.cats.isLiked)
    const like = useSelector(state => state.cats.like)
    const isCatLiked = useSelector(state => state.cats.isCatLiked)

    const removeCat = (id) => {
        dispatch(removeCatAction(id))
    }

    const removeLikedCat = (cat) => {
        dispatch(unLikedAction(cat))
    }

    const isLike = (cat) => {
        isLiked.some((elem) => elem.id === cat.id) ? dispatch(unLikedAction(cat)) : dispatch(isLikedAction(cat))

    }

    return (
        <>
            {isCatLiked && isLiked.map((cat, id) =>
                <li className={classes.cat__item} key={id}>
                    <p>Лайкнутые</p>
                    {isFetching
                        ? <div>Загрузка</div>
                        : <div>
                            <img src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                            {/* {cat.breeds.forEach[0].name} */}
                            {cat.breeds.map(i => <p>Порода: {i.name}</p>)}

                        </div>
                    }
                    <button className={classes.activeBtn} onClick={() => isLike(cat)}>❤︎</button>
                    <button onClick={() => removeLikedCat(cat)}>🗑</button>
                </li>
            )}

            {!isCatLiked && cats.map((cat, id) => {

                const isLikedHeart = isLiked.some((elem) => elem.id === cat.id)

                return <li className={classes.cat__item} key={id}>
                    <p>Фотография милого котика!</p>
                    {isFetching
                        ? <div>Загрузка</div>
                        : <div>
                            <img src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                            {/* {cat.breeds.forEach[0].name} */}
                            {cat.breeds.map(i => <p>Порода: {i.name}</p>)}

                        </div>
                    }
                    <button className={isLikedHeart ? classes.activeBtn : classes.btn} onClick={() => isLike(cat)}>❤︎</button>
                    <button onClick={() => removeCat(cat.id)}>🗑</button>
                </li>
            }

            )}

        </>
    )
}


export default CatItem 