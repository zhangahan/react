import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import One from './student-1/one.js';
import Two from './student-2/two.js';

class All extends Component{
    constructor(props) {
        super(props);
        this.changeBack = this.changeBack.bind(this);
        this.state = {
         num1:1
         }
    }
    render () {
        return (
            <div>
                <One fn={this.changeBack} nameBlock1={this.state.num1}/>
                <Two fn={this.changeBack} nameBlock1={this.state.num1}/>
            </div>

        )
    }
    changeBack(val){
        this.setState({
            num1:val
        })
    }
}


ReactDOM.render(
    <All />,
    document.getElementById('root')
);
