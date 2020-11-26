import React from 'react';

const Lesson11 = (props) => {
//    const Lesson11 = ({user={login,avatar_url,html_url}}) => {

    const {login,avatar_url,html_url} =props.user;
    return(
        <div>
Functional Component 
             
            
            

<img src={avatar_url} alt={login}style={{width:'50px'}}  /> <br />
{login}  <br />
<a href={html_url} > click here to see profile </a> <br />



                

    
   
    

</div>        

        

    )
} 

export default Lesson11;