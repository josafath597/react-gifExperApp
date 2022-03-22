import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Ouran High School Host Club']);

    const handleAdd = () =>{
        setCategories([...categories, 'Bokura ga Ita' ])
    }


  return (
    <>
    <h2>GifExpertApp</h2>
    <hr />
    <button onClick={handleAdd}>Agregar</button>
    <ol>
        {
            categories.map(category => {
                return <li key={category}>{category}</li>
            })
        }
    </ol>
    </>  
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp