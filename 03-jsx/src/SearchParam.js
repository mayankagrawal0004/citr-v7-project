import { useEffect, useState } from "react";

import Result from "./rESULT.JS";
import userBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";


const ANIMALS = ["bird","cat", "Tiger","Lion", "dog","fox"];
const COLORS = ["red","blue","green","orange","yellow"];
const SearchParam = () => {
   const [location, setLocation]  = useState("");
   const [animal, setAnimal] = useState("");
   const [breed, setBreed] = useState("");
   const [counter, setCounter] = useState(0);
   const [allBreeds] = userBreedList(animal);
   const [pets, setPets] = useState([]);
   const [theme, setTheme] = useContext(ThemeContext);

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
                <label htmlFor="theme">
                                Theme
                                <select
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                onBlur={(e)=> setTheme(e.target.value)}
                                >
                                    <option/>
                                    {COLORS.map((color) => (
                                        <option key={color} value={color}>{color}</option>
                                    ))
                                    }
                                      
                                </select>
                </label>
                <button style={{backgroundColor:theme}}> Submit</button>
            </form>
            <Result pets={pets}></Result>
        </div>
    );
};

export default SearchParam;