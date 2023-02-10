import React from 'react'
import { useSelector } from 'react-redux'

const CatFacts = () => {
    const facts = useSelector(state => state.facts.facts)

    return (
        <div>
            {facts.map(fact =>
                <div>
                    {fact.name}
                </div>
            )}
        </div>
    )
}

export default CatFacts