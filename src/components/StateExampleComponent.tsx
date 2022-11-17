// Namensgebung = Großgeschrieben, genau so wie der Dateiname
// () = Können Parameter benutzen = In React nennt sich das Props
import {useState} from "react";

export default function StateExampleComponent() {

    // CHANGE DETECTION führt dazu das neu gerendert wird
    // "to render" zu Deutsch
    // In React nutzen wir dazu "State"
    // "state" z. Dt. Status

    // Unser State um croissantCounter zu verfolgen
    // useState gibt uns auf der ersten Stelle den aktuellen Wert
    // d.h. croissantCounter
    // Und an zweiter Stelle eine Funktion, um den State zu verändern
    // d.h. setCroissantCounter
    // Schreibweise des Setters = set<StateName>
    const [croissantCounter, setCroissantCounter] = useState(0);

    function eatCroissant() {
        console.log("Mmmmm ein leckeres 🥐 mit Honig wird gesnackt")
        const newCroissantCounter = croissantCounter + 1;
        setCroissantCounter(newCroissantCounter);
        console.log(croissantCounter)
    }

    const reduceCounter = () => {
        console.log("Reduce Counter")
        setCroissantCounter(croissantCounter - 1)
    }

    // Runde Klammer MUSS in return Zeile sein, weil sonst
    // "unreachable code after return statement"
    return (
        <div>
            So viele 🥐 haben wir schon gegessen: {croissantCounter}
            <br />
            <br />
            <button onClick={eatCroissant}>🥐 essen</button>
            <button onClick={reduceCounter}>🥐 reduzieren</button>
        </div>);
}
