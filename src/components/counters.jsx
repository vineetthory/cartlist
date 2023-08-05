import React, { Component } from 'react';
import Counter from './counter';
import './counter.css'

class Counters extends Component {

    render() { 
        const { onReset , counters , onDelete , onIncrement , onDecrement } = this.props;
        return (
            <div className='border border-secondary m-4 p-4'>
               <div className=' aline m-2'><span className='resetbtn m-1'
                onClick={onReset}>reset
                </span> </div> 
                {/* props include datat that we give to component , where as state include include data that is local or private to that component */}
               {counters.map ( counter => 
               <Counter 
               key={counter.id}  
               onIncrement = {onIncrement }
               onDelete= {onDelete }
               onDecrement = {onDecrement}
               counter = {counter}
               /> 
               )}

            </div>
        
        );
    }
}
 
export default Counters;