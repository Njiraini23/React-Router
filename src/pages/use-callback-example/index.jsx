import Counter from './counter';
import { useCallback, useState } from 'react';

function UseCallBackExample(){

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);  

    const memorisedSetCountOne = useCallback(()=>setCountOne(countOne + 1), [countOne]);
    const memorisedSetCountTwo = useCallback(()=>setCountTwo(countTwo + 1), [countTwo]);

    return (
        <div>
            <h1>Use callback</h1>
            <Counter 
            countValue={countOne} 
            onClick={memorisedSetCountOne} 
            />
            <Counter 
            countValue={countTwo} 
            onClick={memorisedSetCountTwo} 
            />
        </div>
    )
}

export default UseCallBackExample;