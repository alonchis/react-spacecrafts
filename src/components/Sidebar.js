import React from "react";

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