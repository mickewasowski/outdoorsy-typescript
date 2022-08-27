import { useEffect, useContext } from "react";
import { CamperContext } from "../../contexts/CamperContext";
import CamperCard from "../camper-card/Camper-card.component";
import {Wrapper, NoResults} from './Campers-list.styles';

function CampersList(){
    const {currentSearch: {camperList}} = useContext(CamperContext);

    useEffect(() => {

    }, [camperList]);
    
    return(
        <Wrapper>
            {
                camperList.length > 0
                ? camperList.map(x => <CamperCard key={x.id} image={x.image} heading={x.name}/>)
                : <NoResults>Nothing to show...</NoResults>
            }
        </Wrapper>
    )
}

export default CampersList;