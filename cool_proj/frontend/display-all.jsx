import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';


class DisplayAll extends React.Component{
    render(){
        return (
            <>
            <Clock />
                <Tabs tabList={[{ title: "one", content: "IM TAB ONE" }, 
                    { title: "two", content: "IM TAB two" }, 
                    { title: "three", content: "IM TAB three"}]}/>
            </>
        );
    }
}


export default DisplayAll;