import logo from './logo.svg';
import wtlogo from './assets/logos/wt_logo.png';
import './App.css';

function App () {
    return (
        <div className="App">

            <header className="App-header">

                <img src={ wtlogo } className="App-logo" alt="logo" />

                <h1>WeTalkin.com</h1>
                <img src={ logo } className="App-logo" alt="logo" />
                <p>
                    Welcome to WeTalkin by Blossend!
                </p>
                <a
                    className="App-link"
                    href="https://blossend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more about Blossend
                </a>
            </header>

        </div>
    );
}

export default App;
