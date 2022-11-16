import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from "./HelloComponent";
import GreetingsComponent from "./GreetingsComponent";
import PeopleGallery from "./PeopleGallery";

// Komponente die "App" heißt
// werden in .tsx Dateien gespeichert
function App() {

    // Hier wird "Logik betrieben"
    // Hier gilt reines TypeScript
    const myCoCoachesName = "Florian";

    const myBeautifulCoursePeople= [
        "Bassam Kharashfeh",
        "Cengizhan Atakul",
        "Iuliia Atutova",
        "Lilian Carreño",
        "Maria Weber",
        "Marcell Dechant",
        "Vladimir Klippert",
        "Marcus Schweizer",
        "Mykhailo Solod",
        "Waleed Al morshed",
        "Kolja WIllmann",
        "Nick Klockgether",
        "Johanna Chiabotto",
        "Fangfang Wang",
        "Licet Ullman",
        "Martin Kascak",
    ]

    return (
        // Das ist KEIN HTML
        // Das ist ein "Template" = Schablone
        // Aus diesem Objekt BAUT React dann "echtes" HTML

        <div className="App">

            <HelloComponent/>
            <PeopleGallery nameList={myBeautifulCoursePeople} />
        </div>

    );
}

export default App;
