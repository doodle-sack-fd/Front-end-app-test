import React from 'react'
import { useSelector } from 'react-redux'
import classes from './CatItem.module.css'

const CatItem = () => {
    const cats = useSelector(state => state.cats.cats)
    const isFetching = useSelector(state => state.cats.isFetching)
    const facts = useSelector(state => state.facts.facts)

    return (
        <>
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
                </li>
            )}
        </>
    )
}


export default CatItem 