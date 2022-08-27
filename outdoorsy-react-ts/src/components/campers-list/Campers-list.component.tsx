import React, { useEffect, useContext } from "react";
import { CamperContext } from "../../contexts/CamperContext";
import CamperCard from "../camper-card/Camper-card.component";

interface Camper {
    id: number,
    image: string,
    name: string
}

const CampersList: React.FC = () => {
    const {camperList} = useContext(CamperContext);
    
    useEffect(() => {

    }, [camperList]);

    return(
        <div>
            {
                camperList.length > 0
                ? camperList.map((camper:Camper) => {return <CamperCard key={camper.id} image={camper.image} heading={camper.name}/>})
                : <p>Nothing to show...</p>
            }
        </div>
    )
}

export default CampersList;