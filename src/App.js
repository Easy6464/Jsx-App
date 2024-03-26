import './App.css';
import Product from './Components/Product';
import Card from './Components/Card';

function App() {
  const firstName = prompt('Enter your First Name');
  const lastName = prompt('Enter your Last Name');
  return (

    <div className='card'>
      <Card/>

      <div className='card'>
          <h2 className='first'>Hello {firstName ? lastName : 'there'}!!!</h2>
          {firstName && <img src={Product.image} alt="Product" />}
      </div>

    </div>


  );
}
export default App;