import React, { Component } from 'react';

class Lesson8b extends Component {
    render () {

        const t= this.props.title

        
        return(
            <div>
                <p> this is lesson8b  ceating simple Navbar </p>
                
                <nav>
                    
        <h1> {t} </h1>
                    
                </nav>

            </div>

        )
    }
}

export default Lesson8b;
