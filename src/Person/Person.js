import React  from 'react';
import classes from './Person.module.css'

// Radium Specific CSS 
// import Radium from 'radium'; 


// styled components Specific CSS 
//import styled from 'styled-components';

// Styled Components Specific CSS 
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px; 
//     text-align: center;
    
//     @media (min-width: 500px){
//         width: 450px;
// }
// `;


const person = (props) => {

    //const Button = styled.button`

    return (

        <div className={classes.Person}>
        
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </div>


        // Styled Components Specific CSS 
        // <StyledDiv>
        
        //     <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!!!</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>

        // </StyledDiv>
    
    )
};

// export default Radium(person); 

export default person; 