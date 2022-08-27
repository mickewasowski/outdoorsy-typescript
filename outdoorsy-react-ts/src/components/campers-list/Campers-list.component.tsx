import React, { useEffect, useContext } from "react";
import { CamperContext } from "../../contexts/CamperContext";
import CamperCard from "../camper-card/Camper-card.component";

interface Camper {
    id: number | undefined,
    name: string,
    image: string
}

const CampersList: React.FC = () => {
    const {camperList} = useContext(CamperContext);
    
    useEffect(() => {

    }, [camperList]);

    return(
        <div className="flex flex-col gap-7 mb-[2rem]">
            {
                camperList.length > 0
                ? camperList.map((camper:Camper) => {return <CamperCard key={camper.id} image={camper.image} heading={camper.name}/>})
                : <p className="text-center text-3xl mt-[3rem]">Nothing to show...</p>
            }
        </div>
    )
}

export default CampersList;