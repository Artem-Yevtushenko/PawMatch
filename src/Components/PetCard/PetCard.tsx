import React from "react";
import './PetCard.css'
import {DataBase} from "../../DataBase";

interface PetProps {
    filters: string[]
}
function PetCard(props: PetProps) {
    const data = new DataBase();
    const filters = props.filters;
    const visibleDogs = data.dogs.filter(dog =>
        filters.every(f => dog.features.includes(f))
    );


    return (
        <div className="card">
            {filters.length === 0 ?(
                <div>
                    <div className="image">
                        🐶
                    </div>
                    <h2>Waiting for your choice...</h2>
                    <p>Select filters to find your perfect match!</p>
                </div>
                ) : (
                    <div>
                        {visibleDogs.length > 0 ? (
                            visibleDogs.map(dog =>
                                <div key={dog.breed}>{dog.breed}</div>)
                        ) : (
                            <p>No dogs match these criteria</p>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default PetCard;