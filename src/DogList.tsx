import {DataBase} from "./DataBase";

interface DogProps{
    filters: string[];
}

export function DogList(props: DogProps){
    const data = new DataBase();
    const filters = props.filters;
    const visibleDogs =  data.dogs.filter(dog =>
            filters.every(f => dog.features.includes(f))
        );

    return(
        <div>
            {filters.length === 0 ? (
                <p>Choose qualities to see dogs</p>
            )
                : (
                    <div>
                        {visibleDogs.length > 0 ? (
                            visibleDogs.map(dog => (
                                <div key={dog.breed}>
                                    <h3>{dog.breed}</h3>
                                </div>
                            ))
                        ) : (
                            <p>No dogs match these criteria</p>
                        )}
                    </div>
                )}
        </div>
    )
}