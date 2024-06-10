import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AIS FARIS</h1>
        <p>
          Muhammad Faris Abqari
          20220140097
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-body">
        <h2>INI APA YA?</h2>
        <p>
          Semoga bisa berjalan heheh
        </p>
        <div className="App-section">
          <h3>BISMILLAH</h3>
          <p>- OPEN JASA ANGKUT</p>
          <p>- OPEN JOKI</p>
        </div>
        <div className="App-section">
          <h3>LAPARRR </h3>
          <p>jangan lupa ya makan minum</p>
        </div>
      </div>
    </div>
  );
}

export default App;
