import * as React from 'react';

export default class Counter extends React.Component{
    state = {
        count: 0
    };


    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        });
    };

    render () {
        return(
            <div className="tb-theme--primary-bg tb-container--stretched tb-width--full tb-padding--20">
                <p>{this.state.count}</p>
                <button className="tb-button--primary" onClick={this.increment}>Increment</button>
                <div className="tb-padding--12"></div>
                <button className="tb-button--secondary" onClick={this.decrement}>decrement</button>                
            </div>
        )
    }
}
