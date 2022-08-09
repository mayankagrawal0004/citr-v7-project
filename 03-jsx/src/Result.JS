import Pet from "./Pet";

const Result = (params) => {
const pets = params.pets;
    return (
    !pets.length ? (
        <h1>Not Found</h1>
    ) : (
        pets.map((pet) => (
        <Pet 
        name={pet.name} 
        animal={pet.animal} 
        breed={pet.breed} 
        key={pet.id}
        id={pet.id}
        images = {pet.images}
        location = {`${pet.city} ${pet.state}`}
        />
    ))
    )
    )};

    export default Result;