
import logo from './assets/logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <form className="App-form">
            <ul>
              <li>
                <label for="name">Email:</label>
                <input type="email" id="name" name="user_name"/>
              </li>
              <li>
                <label for="name">Contraseña:</label>
                <input type="password" id="name" name="user_name"/>
              </li>
              <li class="button">
                <button type="submit">Enviar</button>
              </li>
            </ul>
          </form>
      </header>
    </div>
  );
}

export default App;
