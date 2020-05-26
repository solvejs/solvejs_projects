import React, {createContext, useState} from '../containers/bumpers/unused/react';

export const BumpersContext = createContext();

export const BumpersProvider = (props) => {
    const [ bumpers, ] = useState([

    ])
    return (
        <BumpersContext.Provider>
            {props.children}
        </BumpersContext.Provider>
    )
}