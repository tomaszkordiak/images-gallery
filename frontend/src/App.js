import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e);
}

const App = () => {
  return (
    <div>
      <Header title="Images Gallery" />
      <Search handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
