import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'



function Header({ title }) {
    const onclick = () => {
        console.log("clicked")
    }

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color="green " text="Add" onclick={onclick} />

        </header>
    )
}
Header.defaultProps = {
    title: "Task tracker app"
}
Header.propsTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
