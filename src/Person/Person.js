import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #eee;
padding: 16px;
text-align: center;
@media (min-width: 500px) {
        width: 600px;
color: red; }
`;
const person = (props) => {

        return (
                <StyledDiv>
                        <p onClick={props.click}>I'm a Person and my name is {props.name} and i am {props.age} and my {props.children}</p>
                        <input type="text" onChange={props.change} />
                </StyledDiv>
        )

};
export default person