// conditional rendering using if statement 
// and
import  React , { Component } from 'react';

class Lesson7a extends Component {

    render() {

        
        const name = 'Ammar Hunaid bhai'
        const loading = false;
        const showName= true;

        // if (loading) {
        //     return(
        //         <h4>loading ... </h4>
        //     )

        // }
        return(
            <div>
                {loading  ? <h3> loading ....</h3> : <h2> Hello  {name} </h2>}
                {loading  ? <h3> loading ....</h3> : <h2> Hello  {showName && name} </h2>}

                
                

            </div>
        )
    }
}

export default Lesson7a