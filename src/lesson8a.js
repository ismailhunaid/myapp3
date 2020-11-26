import React, { Component } from 'react';
import propTypes from 'prop-types'
 

class Lesson8a extends Component {

    static defaultProps ={
        title:'lesson8',
        name:'ismail'
    }
    static propTypes = {
        title:propTypes.string.isRequired,
        name:propTypes.string.isRequired
        
    }


    render() {
        
        return(
            <div>
                <h1>
                    {this.props.title}  {this.props.name}
                     
                </h1>
                

            </div>
        )
    }

}
    


export default Lesson8a;
