import React from "react";
import Login from "./login";
import DataView from "./data_view";
import "../styles/reset.css"
import "../styles/base_styles.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
    }


    render() {
        return (
            <div className="app">
                <nav>
                    <Login/>
                </nav>
                <div className="content">
                    <DataView/>
                    <div className="hello">hello</div>
                </div>
            </div>
        )
    }
}

export default App