import "./GreetingsComponent.css"
import {useState} from "react";

// <KomponentenName> + "Props"
type GreetingsComponentProps = {
    nameToGreet: string
    handleAbsenceCheck(nameToGreet: string) : void
}

// props = Requisiten
// Übergabeparameter für unsere Komponenten
// In React nennen wir den (fast) immer props
export default function GreetingsComponent(props: GreetingsComponentProps) {

    function handleAbsenceCheck() {
        console.log("GreetingsComponent sagt " + props.nameToGreet + " ist da")
        props.handleAbsenceCheck(props.nameToGreet);
    }

    return (
        // Wenn wir { } (geschweifte Klammern im return verwenden,
        // können wir JS ausführen
        <div className={"Greeting-Box"}>
            <button onClick={handleAbsenceCheck}>✅</button>
            <h3>Hallo ... {props.nameToGreet}</h3>
        </div>
    );
}