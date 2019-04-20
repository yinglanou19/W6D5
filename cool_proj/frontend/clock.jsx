import React from 'react';
import ReactDOM from'react-dom';

class Clock extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.tick()
    }

    render(){
        return (
            <>
                <h1 id="widget-title">Clock</h1>
                <div id="clock">
                    <div className="boomdigity"><span>Time:</span> <span>{this.state.date.toTimeString()}</span></div>
                    <div className="boomdigity"><span>Date:</span> <span>{this.state.date.toDateString()}</span></div>
                </div>
                    
                
         
            </>

        );
    }

    tick() {
        this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    };

}

export default Clock;