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
                <div className="placeholder">
                    <div className="placeholder-image">
                        🐶
                    </div>
                    <h2>Waiting for your choice...</h2>
                    <p>Select filters to find your perfect match!</p>
                </div>
                ) : (
                    <div>
                        {visibleDogs.length > 0 ? (
                            <div className="dog-grid">
                                {visibleDogs.map(dog =>(
                                    <div key={dog.breed} className="dog-card">
                                        <div className="dog-avatar">
                                            🐕
                                        </div>
                                        <div className="dog-name">
                                            {dog.breed}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="placeholder">
                                <h2>No dogs found</h2>
                                <p>Try removing some filters to broaden your search.</p>
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default PetCard;