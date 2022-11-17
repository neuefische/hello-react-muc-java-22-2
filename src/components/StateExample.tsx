import {useEffect, useState} from "react";

export default function StateExample () {

    const [variable, setVariable] = useState(0);

    function incrementNumber(event?: any, customIncrement? : number) {
        // const newVariable = variable + 1;
        // setVariable(newVariable);

        setVariable((prevVariable) => {
            return prevVariable + 1
        });
    }

    return(
        <>
            <br />
            {variable}
            <button onClick={incrementNumber}>+</button>
        </>
    )
}