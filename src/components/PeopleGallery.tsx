import "./PeopleGallery.css"

// <KomponentenName> + "Props"
import GreetingsComponent from "./GreetingsComponent";
import React, {useState} from "react";

type PeopleGalleryProps = {
    nameList: string []
}

export default function PeopleGallery(props: PeopleGalleryProps) {

    const [filteredNameList, setFilteredNameList ] = useState(props.nameList)

    function handleAbsenceCheck(nameToGreet: string) {
        console.log("PeopleGallery bestätigt " + nameToGreet + " ist da")
        const updatedList = filteredNameList.filter((name) => name !== nameToGreet)

        setFilteredNameList(updatedList)
    }


    // Wir erstellen eine Liste von Komponenten mit den Namen
    const peopleComponents = filteredNameList.map(
        (personsName, index) => {
            return <GreetingsComponent nameToGreet={personsName} handleAbsenceCheck={handleAbsenceCheck} key={index}/>
        }
    );

    return (
        // Wir brauchen auf jeden Fall ein "HTML"-ish Elternelement
        <div className={"PeopleGallery"}>
            {peopleComponents}
        </div>
    )
}