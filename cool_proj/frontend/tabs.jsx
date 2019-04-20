import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: 0
        };
        this.click = this.click.bind(this);
    }

    click(idx){
        return () => this.setState({ currentTab: idx })
    }

    render(){
        console.log(this.state.currentTab)
        return(
            <>
                <h1 id="widget-title">Tabs</h1>
            <div id="tab-wrapper">
                <div id="tab-header">
                    <div id="tab-one" className="tabs" onClick={this.click(0)}>{this.props.tabList[0].title}</div>
                    <div id="tab-two" className="tabs" onClick={this.click(1)}>{this.props.tabList[1].title}</div>
                    <div id="tab-three" className="tabs" onClick={this.click(2)}>{this.props.tabList[2].title}</div>
                </div>
                    <div id="tab-content"><p>{this.props.tabList[this.state.currentTab].content}</p></div>
            </div>
            </>
        );
    }
}

export default Tabs;