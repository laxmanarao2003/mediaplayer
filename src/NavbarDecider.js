import React from 'react'
import VerticalNav from './VerticalNav.js';
import OffcanvasNav from './OffcanvasNav.js';

function NavbarDecider(props) {
    // based on the props passed the navigation component will be rendered:)
    if(props.nav===0)
        return <VerticalNav/>
    else 
        return <OffcanvasNav/>
    
}

export default NavbarDecider