import React, {createContext, useState} from 'react';

export const BumpersContext = createContext();

export const BumpersProvider = () => {
    const [ bumpers, ] = useState;
    return (
        <BumpersContext.Provider>
            {props.children}
        </BumpersContext.Provider>
    )
}