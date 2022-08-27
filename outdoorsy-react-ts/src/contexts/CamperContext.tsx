import { createContext, useState } from "react";

export const CamperContext = createContext();

const initialState = {
    camperList: [],
    searchWord: ''
}

export const CamperProvider = ({children}) => {
    const [currentSearch, setCurrentSearch] = useState(initialState);

    const changeSearch = (searchWord) => {
        if (searchWord.trim().length !== 0) {
            setCurrentSearch((prevState) => {return {...prevState, searchWord}});
        }
    }

    const updateCamperList = (camperList) => setCurrentSearch((prevState) => {return {...prevState, camperList}})

    return(
        <CamperContext.Provider value={{updateCamperList, changeSearch, currentSearch}}>
            {children}
        </CamperContext.Provider>
    )
}