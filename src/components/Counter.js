import React from 'react';
import {connect} from "react-redux";
import {decrementNumber, incrementNumber} from "../redux/actions/counterAction";

const Counter = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center text-success">Counter</h3>
                        </div>
                        <div className="card-body">
                            <h1 className="text-center text-primary">{props.number}</h1>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-success" onClick={props.incrementNumber}>+</button>
                            <button type="button" className="btn btn-danger" onClick={props.decrementNumber}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        number:state.counter.number
    }
}

export default connect(mapStateToProps,{incrementNumber, decrementNumber})(Counter);