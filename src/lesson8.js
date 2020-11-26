import React, { Component } from 'react';

class Lesson8 extends Component {
    render () {

        const t= this.props.title

        const {title,name} = this.props
        return(
            <div>
                <p> this is lesson8  Component props and props types default props </p>
                <p> creating Navbar component </p> 
                <nav>
                    <h1> Navbar</h1>
        <h1> {this.props.title}</h1>
        <h1> {t}</h1>
        <h1> {title} {name} </h1> 
        

                    
                </nav>

            </div>

        )
    }
}

export default Lesson8;
