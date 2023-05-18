import NavBar from './componets/NavBar/Navbar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/itemCount/itemCount';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido, aqui ira el catalogo'}/>
      <ItemCount initial ={10} stock ={10} onAdd = {(quantity)=> console.log('Cantidad agregada ', quantity)} />
    </div>
  );
}

export default App;
