import React, {useEffect, useState} from "react";

export const Counting = () => {
    const [sum, setSum] = useState(40000);
    const [percent, setPercent] = useState(13);



    const c = 100 //100%//
    const [result, setResult] = useState((sum / (c - percent)) * percent)

    useEffect(()=>{
        setResult((sum / (c - percent)) * percent)

    },[sum, percent])
    return (

        <form>
            <div className='form'>

                <label htmlFor="formGroupExampleInput"/>
                <div>
                    %
                </div>
                <input value={percent}  type="number" className="form-control percent" id="formGroupExampleInput"
                       onChange={(e) => {
                           const newValue = e.target.value;
                           if(newValue <=100 && newValue >=0){
                               setPercent(newValue);
                           }
                       }}/>
                <div>
                    Сумма
                </div>
                <input value={sum} type="number" onChange={(e) => setSum(e.target.value)}/>
            </div>
            <p>РЕЗУЛЬТАТ</p>
            <div>
                <div className="result">
                    {result}
                </div>
            </div>
        </form>)

}

export default Counting;