import React from 'react';

interface Props {
    image: string,
    heading: string
}

const CamperCard: React.FC<Props> = ({image, heading}) =>{

    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <div>
                <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default CamperCard;