import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

class App extends React.Component {
  render() {
    const trueBool = true
    return (
        <div>
            Hello World!
            { trueBool === true 
                ? <p>True is {trueBool.toString()}</p>
                : <p>True is falsed? {trueBool.toString()}</p>
            }
        </div>
    );
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
