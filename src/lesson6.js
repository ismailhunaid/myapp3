import React,{Fragment, Component }from 'react'


// understanding JSX and Fragments
// and React.createElement
class Lesson6 extends Component {
    render(){
        return(
            <Fragment>
                <h1> lesson 2 jsx and fragments</h1>
                <h2> lesson2 jsx and fragments</h2>

            </Fragment>
        )
    }
}

React.createElement('div',{className:'App'},React.createElement('h1',null,'hello react'))
export default Lesson6;
