import React from 'react';
import logo from './voyager.png';
import './components/Sidebar';
import './App.css';


function SideBarRow(props) {
    const element = props.buttons;
    const listItems = element.map((element) =>
        <li>{element}</li>
    );
    return <h1>{listItems}</h1>
}

class Sidebar extends React.Component {
    render() {
        const buttons = ["Voyager","Sputnik", "Pioneer 6"];
        return (
            <div className="sidebar">
                <SideBarRow buttons={buttons}/>
            </div>

        );
    }
}

class Probe extends React.Component {
    render() {
        return (
            <div className="item">
                <h1>Spacecraft In Space {this.props.name}</h1>
                <p>Voyager 1 & 2</p>
                <ul>
                    <li>Command computer Subsystem</li>
                    <li>Altitude and Articulation Control Subsystem</li>
                    <li>Uplink Communications via S-band</li>
                    <li>Radioisotope thermoelectric Generators (RTG)</li>
                </ul>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Sidebar />
                <img src={logo} className="App-logo" alt="logo"/>
                <Probe/>
                <div id="Stars"></div>
            </header>
        </div>
    );
}

export default App;
