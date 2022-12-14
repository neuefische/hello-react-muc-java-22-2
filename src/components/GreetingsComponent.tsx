import "./GreetingsComponent.css"

// <KomponentenName> + "Props"
type GreetingsComponentProps = {
    nameToGreet: string
}

// props = Requisiten
// Übergabeparameter für unsere Komponenten
// In React nennen wir den (fast) immer props
export default function GreetingsComponent(props: GreetingsComponentProps) {
    return (
        // Wenn wir { } (geschweifte Klammern im return verwenden,
        // können wir JS ausführen
        <div className={"Greeting-Box"}>
            <h3>Hallo ... {props.nameToGreet}</h3>
        </div>
    );
}