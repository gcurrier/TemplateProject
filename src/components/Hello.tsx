import * as React from "react";
import '../styles/style.css';
import print from '../actions/print';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {

    doPrint() {
        const consoleMessage = 'Console Log output from button click in "Hello" class';
        print({msg:consoleMessage});
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <br/>
                <div className="hello">
                    <p>This text should be red, if the style import is correct</p>
                    <button onClick={this.doPrint}>click to produce console output</button>
                </div>
            </div>
        )
    }
}