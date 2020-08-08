import React, { useState } from 'react';
import Admin from '../bumpers/Admin'

const SecureComps = () => {
    const [ loggedIn, checkAuthentication ] = useState(false);
    return (
        <Admin />
    )
}
