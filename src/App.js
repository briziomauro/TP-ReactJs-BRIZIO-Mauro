import NavBar from './componets/NavBar/Navbar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido, aqui ira el catalogo'}/>
    </div>
  );
}

export default App;
