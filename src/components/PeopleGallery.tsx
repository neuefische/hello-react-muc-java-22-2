import "./PeopleGallery.css"

// <KomponentenName> + "Props"
import GreetingsComponent from "./GreetingsComponent";
import React from "react";

type PeopleGalleryProps = {
    nameList: string []
}

export default function PeopleGallery(props: PeopleGalleryProps) {

    // Wir erstellen eine Liste von Komponenten mit den Namen
    const peopleComponents = props.nameList.map(
        (personsName, index) => {
            return <GreetingsComponent nameToGreet={personsName} key={index}/>
        }
    );

    return (
        // Wir brauchen auf jeden Fall ein "HTML"-ish Elternelement
        <div className={"PeopleGallery"}>
            {peopleComponents}
        </div>
    )
}