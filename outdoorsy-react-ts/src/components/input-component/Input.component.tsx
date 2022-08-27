import {useState, useContext, useEffect} from 'react';
import {CamperContext} from '../../contexts/CamperContext';


function Input(){   
    const [inputString, setInputString] = useState('');
    const [count, setCount] = useState(0);
    // const {updateCamperList} = useContext(CamperContext);

    // useEffect(() => {
    //     fetch(`https://search.outdoorsy.com/rentals?filter[keywords]=${inputString}&page[limit]=&page[offset]=`)
    //     .then(res => res.json())
    //     .then((result) => handleResponseData(result))
    //     .catch(err => console.log(err))
    // }, [inputString]);

    const handleInputChange = (e) => {
        let text = e.target.value;
        setInputString(text);
    }

    // const handleClearInput = () => {
    //     let input = document.getElementById('input-field');
    //     input.value = '';

    //     setInputString('');
    // }

    // const handleResponseData = (result) => {
    //     let {data} = result;
    //     let campers = [];

    //     if (data.length !== 0) {
    //         for (const camperData of data) {
    //             let {id, attributes: {name, primary_image_url: image}} = camperData;
    
    //             let camper = {
    //                 id,
    //                 name,
    //                 image
    //             };
                
    //             campers.push(camper);
    //         }
    //     }

    //     setCount(campers.length);
    //     updateCamperList(campers);
    // }

    return(
        <div>
            <div>
                <input id='input-field' onChange={handleInputChange}/>
                {/* <ClearIcon onClick={() => handleClearInput()}/> */}
            </div>
            <p>Campers: {count}</p>
        </div>
    )
}

export default Input;