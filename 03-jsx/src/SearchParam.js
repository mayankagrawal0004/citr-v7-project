import { useEffect, useState } from "react";

import Pet from "./Pet";
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
            <form>
                <label htmlFor="location">
                    Location {location}
                    <input id="location" value={location} placeholder="Location" 
                    onChange={(e) => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal  {counter}
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
            {pets.map((pet) => (
                <Pet 
                name={pet.name} 
                animal={pet.animal} 
                breed={pet.breed} 
                key={pet.id} />
            ))}
        </div>
    );
};

export default SearchParam;