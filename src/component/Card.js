// const h1Style = {
//   backgroundColor: 'black',
//   padding: '10px',
//   color: 'white',
//   textAlign: 'center',
// };

// const myName = 'Ehsanul Islam';

function Card(props) {
  // destructuring
  const { myName, age } = props;

  return (
    <div className='card'>
      <h2 style={{ color: 'red' }}>Hello World!</h2>
      <p className='p1'>{`My name is ${myName}`}</p>
      <p className='p2'> This is paragraph 2</p>
      <p>{age}</p>
    </div>
  );
}

export default Card;
