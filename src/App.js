import React from 'react';
import Card from './component/Card';
import Card2 from './component/Card2';
import Data from './data.json';

function App() {
  let dataCard2 = [];

  // for loop
  // for (let x = 0; x < Data.length; x++) {
  //   dataCard2.push(<Card2 country={Data[x].country} city={Data[x].city} />);
  // }

  // Map
  dataCard2 = Data.map((item, index) => (
    <Card2 key={index} country={item.country} city={item.city} />
  ));

  return (
    <div>
      <h1 className='h1'>This is Heading 1</h1>
      <Card myName='Ehsan' age='I am 25 years old' />
      <Card myName='Nasir' age='I am 24 years old' />

      {dataCard2}
    </div>
  );
}

export default App;
