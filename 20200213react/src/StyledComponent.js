import React from 'react';
import styled, {css} from 'styled-components';

const sizes = {
    desktop : 1024,
    tablet : 768
}

const media = Object.keys(sizes).reduce((acc, label) =>{
    acc[label] = (...args) => css`
    @media(max-width: ${sizes[label]/16}em){
        ${css(...args)};
    }
    `;
    return acc;
}, {});

const Box = styled.div`
background : ${props => props.color || 'blue'};
padding: 1rem;
display : flex;
width : 1024px;
${media.desktop`width:768px;`}
${media.desktop`width:100%;`}
`;

const Button = styled.button`
background:white;
color:black;
border-radius:4px;
padding: 0.5rem;
display:flex;
align-items:center;
justify-content:center;
box-sizing:border-box;
font-size:1rem;
font-weight:600;

&:hover{
    background: rgba(255, 255, 255, 0.9);
}
${props => props.inverted && 
    css`
background:none;
border: 2px sloid white;
color : white;
&:hover{
    background:white;
    color:black;
}
`};
& + button {
    margin-left : 1rem;
}
`;

const StyledComponent = () => (
<Box color ="black">
<Button>おはよう</Button>
<Button inverted={true}>枠だけ</Button>
</Box>
);


export default StyledComponent;