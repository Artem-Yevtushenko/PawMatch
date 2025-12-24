import {DataBase} from "../../DataBase";
import React, {useMemo, useState} from "react";
import "./ChooseBreed.css"

interface Props {
    filters: string[],
    setFilters: (filters: string[]) => void
}
export function ChooseBreed(props: Props) {

    const uniqueFeatures = useMemo(() => {
       const data = new DataBase();
       const allFeatures = data.dogs.flatMap(dog => dog.features)
       return Array.from(new Set(allFeatures)).sort()
   },[])

    const handleClick = (features: string) => {
        if (props.filters.includes(features)) {
            props.setFilters(props.filters.filter(f => f !== features))
        } else {
            props.setFilters([...props.filters, features])
        }
    }

    return (
        <div className="mainChoose">
            {uniqueFeatures.map(feature => (
                <button key={feature} className={`button ${props.filters.includes(feature) ? "active" : ""}`} onClick={() => handleClick(feature)}>
                    {feature}
                </button>
            ))}
        </div>
    )
}