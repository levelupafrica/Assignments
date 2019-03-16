import styled from 'styled-components';


const NoteContnainer = styled.div `
     background: #fff;
     padding: 50px;
     width: 50%;
     margin: 40px auto;
     box-shadow: 0 5px 15px 0 rgba(46, 61, 73, 0.12);
     font-family: 'Work Sans', sans-serif;
`;

const NoteHeading = styled.h1 `
    text-align: center;
     font-weight: 400;
     font-size: 30px;
     color: #636363;
`;

const NoteForms = styled.form `
    display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;
const NoteFormInput = styled.input `
    height: 44px;
     padding-left: 15px;
     padding-right: 15px;
     border: 1px solid #dbe2e8;
     font-size: 14px;
     border-radius: 5px;
     color: #636363;
     box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
     outline: none;
     width: 80%;

`;

const NoteFormTextarea = styled.textarea `
     width: 80%;
     max-width: 80%;
     padding-left: 15px;
     padding-right: 15px;
     padding-top: 15px;
     border: 1px solid #dbe2e8;
     font-size: 14px;
     border-radius: 5px;
     color: #636363;
     font-family: 'Work Sans,', sans-serif;
     box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
     outline: none;
`;


export {
    NoteContnainer,
    NoteForms,
    NoteFormInput,
    NoteFormTextarea,
    NoteHeading,
}