import React from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';

import {actionCreatorIncrement, actionCreatorDecrement} from './actions';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = 0;
    }


    plus(){
        this.props.actionCreatorIncrement();
        console.log(this);
    }
    minus(){
        this.props.actionCreatorDecrement();
    }

    render(){
        return (
            <div>
                <div>{this.props.state}</div>
                <button
                    onClick={()=>this.plus()}
                >
                    +
                </button>

                <button
                    onClick={()=>this.minus()}
                >
                    -
                </button>
            </div>
        );
    };
};


function mapStateToProps(state){
    return {state}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({actionCreatorIncrement, actionCreatorDecrement}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);