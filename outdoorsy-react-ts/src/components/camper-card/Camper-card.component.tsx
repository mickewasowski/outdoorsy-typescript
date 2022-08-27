import React from 'react';

interface Props {
    image: string,
    heading: string
}

const CamperCard: React.FC<Props> = ({image, heading}) =>{

    return(
        <div className='flex items-center gap-4 hover:bg-[#b2b4b7] hover:cursor-pointer rounded-xl'>
            <div>
                <img className='w-[13rem] h-[9rem] rounded-xl'src={image}/>
            </div>
            <div>
                <h2 className='text-2xl'>{heading}</h2>
            </div>
        </div>
    )
}

export default CamperCard;