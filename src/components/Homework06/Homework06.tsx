import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalsData } from "./data";
import "./Homework06.css"

function Homework06() {
    return (
        <div className="homework06-wrapper">
            {animalsData.map((animal) => (
                <AnimalCard
                    key={animal.name}
                    name={animal.name}
                    species={animal.species}
                    imgSrc={animal.image}
                />
            ))}
        </div>
    );
}

export default Homework06
