import React, { useState } from 'react';
import hogs from '../porkers_data';
import Nav from './Nav';
import HogList from './HogList';
import FilterSortControls from './FilterSortControls';

function App() {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const handleFilterChange = (greased) => {
    setFilterGreased(greased);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'weight') {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="ui grid container">
      <Nav />
      <FilterSortControls onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import Nav from './Nav'; 
// import HogList from './HogList';
// import HogDetails from './HogDetails';
// import hogs from '../porkers_data'; 


// function App() {
//   const [hogsData, setHogsData] = useState(hogs);
//   const [selectedHog, setSelectedHog] = useState(null);
//   const [filteredHogs, setFilteredHogs] = useState(hogs);
//   const [sortCriteria, setSortCriteria] = useState(null); // Initially unsorted

//   const handleHogClick = (hog) => setSelectedHog(hog);

//   const handleGreasedFilter = () => {
//     const isFiltered = filteredHogs !== hogsData; // Check if already filtered
//     setFilteredHogs(isFiltered ? hogsData : hogsData.filter((hog) => hog.greased));
//   };

//   const handleSort = (criteria) => {
//     if (sortCriteria === criteria) return; // Prevent unnecessary re-sorts
//     const sortedHogs = [...filteredHogs].sort((a, b) => {
//       if (criteria === 'name') {
//         return a.name.localeCompare(b.name); // Sort names case-insensitively
//       } else if (criteria === 'weight') {
//         return a.weight - b.weight; // Sort weights numerically
//       }
//       return 0; // Default for other criteria
//     });
//     setFilteredHogs(sortedHogs);
//     setSortCriteria(criteria);
//   };

//   return (
//     <div className="App">
//       <Nav onGreasedFilter={handleGreasedFilter} onSort={handleSort} />
//       <HogList hogs={filteredHogs} onHogClick={handleHogClick} />
//       <HogDetails hog={selectedHog} />
//     </div>
//   );
// }

// export default App;

