import logo from './logo.svg';
import wtlogo from './assets/logos/wt_logo.png';
import './App.css';

function App () {
    return (
        <div className="App">

            <h1 style={ {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '1vh',
            } }>Welcome to WeTalkin!</h1>

            <header className="App-header">

                <br></br><br></br><br></br>

                <img src={ wtlogo } className="App-logo" alt="logo" />

                <h1>WeTalkin.com</h1>

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

                <img src={ logo } className="App-logo" alt="logo" />

                <br></br><br></br><br></br>
            </header>

        </div >
    );
}

export default App;
