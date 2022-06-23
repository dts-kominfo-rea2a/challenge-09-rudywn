// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <h1 className='header-contact'>Call a Friend</h1>
            <p>Your friendly contact app.</p>
            <hr className='divider' />
            {/* <p>*************************************************************************************</p> */}
        </header>
    )
}

export default Header;