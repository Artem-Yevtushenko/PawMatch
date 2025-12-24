import React from 'react';
import {ChooseBreed} from "./Components/ChooseBreed/ChooseBreed";
import {useState} from "react";
import {PetList} from "./Components/PetList/PetList";
import PetCard from "./Components/PetCard/PetCard";
import "./App.css"

function App() {
    const [filter, setFilter] = useState<string[]>([]);
  return (
      <div className="App">
          <header className="header">
              <div className="logo">Paw<span>Match</span></div>
              <button>GitHub</button>
          </header>

          <main className="main-container">

              <div className="filters-section">
                  <h1 className="title">Find your <br/>perfect match</h1>
                  <p className="subtitle">Choose qualities that are important to you:</p>

                  <div className="features-grid">
                      <ChooseBreed filters={filter} setFilters={setFilter}/>
                  </div>
              </div>

              <div className="results-section">
                  <div className="placeholder-text">
                        <PetCard filters={filter}/>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
