import './App.css';
import freeCodeCampLogo from '../src/images/freecodecamp-logo.png'

// import components

function App() {
    return (
        <div className="App">
            <div className={'logo-container'}>
                <img
                    src={freeCodeCampLogo}
                    className={'logo-img'}
                    alt={'Logo FreeCodeCamp'}
                />
            </div>
            <div className={'calculator-container'}>

            </div>
        </div>
    );
}

export default App;
