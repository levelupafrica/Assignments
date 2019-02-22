import styled from 'styled-components';


const AppNavbarHeading = styled.h2 `
    text-align: center;
    margin: 0;
     font-weight: 200;
     font-size: 30px;
     letter-spacing: 4px;
     font-family: 'Work Sans', sans-serif;
`;

const AppNavbar = styled.div `
     background: #fff;
     text-align: center;
     padding: 1.5rem 0;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     box-shadow: 0 5px 15px 0 rgba(46, 61, 73, 0.12);
`

export {
    AppNavbarHeading,
    AppNavbar,

}