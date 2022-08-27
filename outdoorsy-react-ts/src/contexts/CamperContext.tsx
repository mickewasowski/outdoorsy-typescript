import React, { createContext, useState } from "react";


interface IProviderProps {
    children: React.ReactNode
}

interface ICamper {
    id: number | undefined,
    name: string,
    image: string
}

const initialState = {
    camperList: [],
    updateCamperList: function() {}
}

interface ICamperContext {
    camperList: Array<ICamper>;
    updateCamperList: (camperList: ICamper[]) => void;
}


export const CamperContext = createContext<ICamperContext>(initialState);

export const CamperProvider: React.FC<IProviderProps>  = ({children}) => {
    const [camperList, setCamperList] = useState<ICamper[]>(initialState.camperList);


    const updateCamperList = (camperList: ICamper[]):void => setCamperList(camperList)

    return(
        <CamperContext.Provider value={{updateCamperList, camperList}}>
            {children}
        </CamperContext.Provider>
    )
}