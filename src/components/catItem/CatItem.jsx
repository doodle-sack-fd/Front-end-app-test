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

    const removeCat = (id) => {
        dispatch(removeCatAction(id))
    }

    const isLike = (cat) => {
        dispatch(isLikedAction(cat))
    }

    const ulLike = (id) => {
        dispatch(unLikedAction(id))
    }

    return (
        <>
            {isLiked.length > 0 ?
                <div>
                    {isLiked.map(like =>
                        <li>
                            <div>
                                {like.url}
                            </div>
                            <button onClick={() => ulLike(like)}>удалить из избранного</button>
                        </li>
                    )}
                </div>

                : <div>Отсутствует </div>
            
            }

            {cats.map((cat, id) =>
                <li className={classes.cat__item} key={id}>
                    <p>Фотография милого котика!</p>
                    {isFetching
                        ? <div>Загрузка</div>
                        : <div>
                            <img src={cat.url} alt="Один из котиков - загружается" width={300} height={300} />
                            <p>Порода: {cat.breeds[0].name}</p>
                        </div>
                    }
                    <button onClick={() => isLike(cat)}>Лайкнуть</button>
                    <button onClick={() => removeCat(cat.id)}>Удалить котика</button>
                </li>
            )}

        </>
    )
}


export default CatItem 