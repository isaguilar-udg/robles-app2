
import logo from './logo.png';
import './App.css';


function App() {
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <form>
            <ul>
              <li>
                <label for="name">Usuario:</label>
                <input type="text" id="name" name="user_name"/>
              </li>
              <li>
                <label for="name">Correo electrónico:</label>
                <input type="text" id="name" name="user_name"/>
              </li>
              <li class="button">
                <button type="submit">Enviar</button>
              </li>
            </ul>
          </form>

        </p>
       <h1>Registro</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
