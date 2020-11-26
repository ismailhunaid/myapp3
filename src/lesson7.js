import React , { Component} from 'react';

class Lesson7 extends Component {

     method = () =>{
        return(
            'this is method inside our class'
        )
    }
    
    render() {

     // we have to define variable here
     const name = 'ismail'
     const funct = () => {
         return(
            'this is a function'
         )
         

     }
        return(
            <div>
                <li> my name is  :{name.toUpperCase()}</li>
        <li> function : {funct()}</li>
        <li>metod inside our class: {this.method()} </li>

        <li>expression example =  sum :{5*5}</li>

                

            </div>
        )
    }
}


export default Lesson7;
