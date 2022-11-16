// <KomponentenName> + "Props"
import GreetingsComponent from "./GreetingsComponent";
import React from "react";
import {RICK_AND_MORTY_CHARACTERS} from "./rick_and_morty_characters"

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

    console.log(RICK_AND_MORTY_CHARACTERS[0])


    return (
        // Wir brauchen auf jeden Fall ein "HTML"-ish Elternelement
        <>
            {peopleComponents}
        </>
    )
}