import React, { createContext, useState } from "react";


interface ProviderProps {
    children: React.ReactNode
}

interface CamperInterface {
    id: number,
    image: string,
    name: string
}

interface stateProps {
    camperList: CamperInterface[]
}

const initialState = {
    camperList: []
}

interface ICamperContext {
    camperList: Array<CamperInterface>;
    updateCamperList?: (camperList: CamperInterface[]) => void;
}


export const CamperContext = createContext<ICamperContext>(initialState);

export const CamperProvider: React.FC<ProviderProps>  = ({children}) => {
    const [camperList, setCamperList] = useState<CamperInterface[]>(initialState.camperList);


    const updateCamperList = (camperList: CamperInterface[]):void => setCamperList(camperList)

    return(
        <CamperContext.Provider value={{updateCamperList, camperList}}>
            {children}
        </CamperContext.Provider>
    )
}