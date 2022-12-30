import logo from './logo.svg';
import wtlogo from './assets/logos/wt_logo.png';
import './App.css';


function App () {
    return (
        <div className="App">

            <header className="App-header">

                <h1 id='title' style={ {
                    // display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '1vh',
                } }>
                    Welcome to WeTalkin by Blossend!
                </h1>

                <br></br><br></br><br></br>

                <img src={ wtlogo } className="App-logo" alt="logo" />

                <br></br>

                <h1>WeTalkin.com</h1>


                <p className='bodyHeading'>
                    Download on the AppStore:
                </p>

                <a class="projectLink" href="https://apps.apple.com/us/app/wetalkin/id1598817389"><button type="button"
                    class="btn btn-outline-success btn-warning ml-2 mr-2 mt-0 mb-4">WeTalkin - AppStore</button></a>


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
