import React, {useState, useContext, useEffect} from 'react';
import {CamperContext} from '../../contexts/CamperContext';

interface ICamper {
    id: number | undefined,
    name: string,
    image: string
}

interface IData{
    id: number,
    attributes: {
        name: string,
        primary_image_url: string
    }
}

interface IResult {
    data: Array<IData>,
    included: Array<Object>,
    meta: Object
}

const Input: React.FC = () => {   
    const [inputString, setInputString] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const {updateCamperList} = useContext(CamperContext);

    useEffect(() => {
        fetch(`https://search.outdoorsy.com/rentals?filter[keywords]=${inputString}&page[limit]=&page[offset]=`)
        .then(res => {
            if (!res.ok) {
               throw new Error(res.statusText); 
            }
            return res.json()
        })
        .then((result) => handleResponseData(result))
        .catch(err => console.log(err))
    }, [inputString]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let text = e.target.value;
        setInputString(text);
    }

    const handleClearInput = ():void => {
        let input = document.getElementById('input-field') as HTMLInputElement;
        input.value = '';

        setInputString('');
    }

    const handleResponseData = (result:IResult):void => {
        let {data} = result;
        let campers:ICamper[] = [];

        if (data.length !== 0) {
            for (const camperData of data) {
                let {id, attributes: {name, primary_image_url: image}} = camperData;
    
                let camper:ICamper = {
                    id,
                    name,
                    image
                };
                
                campers.push(camper);
            }
        }

        setCount(campers.length);
        updateCamperList(campers);
    }

    return(
        <div className='w-full flex-col mb-[1rem]'>
            <div className='mb-[1rem] h-10 outline-2 outline-[#b2b4b7] outline rounded-xl flex justify-around'>
                <input id='input-field' className='w-4/5 text-2xl focus:outline-none' onChange={handleInputChange}/>
                <button className='text-2xl text-[#b2b4b7] hover:text-black' onClick={handleClearInput}>X</button>
            </div>
            <p className='text-center text-2xl'>Campers: {count}</p>
        </div>
    )
}

export default Input;