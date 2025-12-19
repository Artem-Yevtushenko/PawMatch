import {DataBase} from "./DataBase";
import React, {useMemo} from "react";

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

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
       const value = event.target.value;

       if(value && !props.filters.includes(value)) {
           props.setFilters([...props.filters, value]);
       }
    }

    const removeFilter = (filterRemove: string) => {
       props.setFilters(props.filters.filter(f => f !== filterRemove));
    }

    return (
        <div>
            <label>Select Features: </label>
            <select onChange={handleSelect} defaultValue="default">
                <option>Choose a feature...</option>
                {uniqueFeatures.map(feature => (
                    <option key={feature} value={feature}>
                        {feature}
                    </option>
                ))}
            </select>
            <div>
                {props.filters.map(feature => (
                    <button
                        key={feature}
                        onClick={() => removeFilter(feature)}
                    >
                        {feature} ✖
                    </button>
                ))}
            </div>
        </div>
    )
}