import React from 'react';

function Data2(props) {
  const { country, city } = props;
  return (
    <div className='card2'>
      <h3>This is Card 2</h3>
      <p className='p1'>{country}</p>
      <p className='p2'>{city}</p>
    </div>
  );
}

export default Data2;
