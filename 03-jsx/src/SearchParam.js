import { useEffect, useState } from "react";

import Result from "./rESULT.JS";
import userBreedList from "./useBreedList";


const ANIMALS = ["bird","cat", "Tiger","Lion", "dog","fox"];
const SearchParam = () => {
   const [location, setLocation]  = useState("");
   const [animal, setAnimal] = useState("");
   const [breed, setBreed] = useState("");
   const [counter, setCounter] = useState(0);
   const [allBreeds] = userBreedList(animal);
   const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
         const req = await fetch(
             `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
         );
         const json = await req.json();

         setPets(json.pets);
    }
    return (
        <div className="search-params">
            <form onSubmit={(e) => {
            e.preventDefault();
            requestPets();
            }}>
                <label htmlFor="location">
                    Location {location}
                    <input id="location" value={location} placeholder="Location" 
                    onChange={(e) => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal 
                    <select
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        setCounter(counter+1);
                    }}
                    onBlur={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    >
                        <option/>
                            {ANIMALS.map((animal) => (
                                <option key={animal} value={animal}>{animal}</option>
                            ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                    id="breed"
                    value={breed}
                    onChange={(e) => {
                        setBreed(e.target.value);
                    }}
                    onBlur={(e) => {
                        setBreed(e.target.value);
                    }}
                    >
                        <option/>
                            {allBreeds.map((breed) => (
                                <option key={breed} value={breed}>{breed}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Result pets={pets}></Result>
        </div>
    );
};

export default SearchParam;