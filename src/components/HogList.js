import React from 'react';
import HogTile from './HogTile';

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;


// import React from 'react';
// import HogCard from './HogCard';

// function HogList({ hogs, onHogClick }) {
//   return (
//     <div className="ui grid container">
//       {hogs.map((hog) => (
//         <div className="ui eight wide column" key={hog.name}>
//             <HogCard hog={hog} onClick={onHogClick} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HogList;