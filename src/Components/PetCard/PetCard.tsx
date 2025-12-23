import React from "react";
import './PetCard.css'

function PetCard() {
    return (
        <div className="card">
            <div className="image">
                🐶
            </div>
            <h2>Waiting for your choice...</h2>
            <p>Select filters to find your perfect match!</p>
        </div>
    );
};

export default PetCard;