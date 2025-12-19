import React from 'react';
import {ChooseBreed} from "./ChooseBreed";
import {useState} from "react";
import {DogList} from "./DogList";

function App() {
    const [filter, setFilter] = useState<string[]>([]);
  return (
    <div className="App">
    <ChooseBreed
        filters={filter}
        setFilters={setFilter}
    />
        <DogList
        filters={filter}
        />
    </div>
  );
}

export default App;
