import React, { Component } from 'react';
import './counter.css'



class Counter extends Component {


    getBadgeClasses() {
        let classes = " m-2 badge-";
        classes += this.props.counter.value === 0 ? "primary" : "primary";
        return classes;
    }

    render() { 
        return (
            <React.Fragment>
            <div className='row' >
                <div className="col-1 mt-2 a-digit"> 
                <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>
                </div>
                <div className="col">
                      
                <button
                onClick={ () => this.props.onIncrement(this.props.counter) }
                className="btn btn-secondary btn-sm m-2"
                > +
                </button>
                <button
                onClick={ () => this.props.onDecrement(this.props.counter) }
                className="btn btn-secondary btn-sm"
                disabled = {this.props.counter.value === 0}
                > -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>


                </div>

              
        
            </div>
       
            </React.Fragment>
           
        );
    }
    formatCount(){
        return this.props.counter.value === 0 ? <span className='a-zero'>zero</span> : this.props.counter.value;

    }

}
 
export default Counter;