import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Hecho');
        // setCategories(cats => {
        //     [ ...cats, e.target.value]
        // })
        if(inputValue.trim().length>2){
            setCategories(cats => [...cats, inputValue])
            setInputValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>

        <span className="p-float-label">
            <InputText 
                id="username"
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                />

            <label htmlFor="username">Gifs</label>
        </span>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory