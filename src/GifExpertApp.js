import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Ouran High School Host Club']);



  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory/>
    <hr />
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