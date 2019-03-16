import styled from 'styled-components';


const SaveFormButton = styled.button `
    background:#02b3e4;
padding:15px 40px;
text-align: center;
color:#fff;
font-family:'Work Sans',sans-serif;
border-radius:4px;
border:none;
font-size:20px;
`;

const DeleteFormButton = styled.button `
    background: #46d31b;
    border: none;
    text-align: center;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    color: #fff;
`;

const EditFormButton = styled.button `
     background: #0590b3;
    ;
    border: none;
    text-align: center;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 20px;
    cursor: pointer;
    margin-right: auto;
    outline: none;
    color: #fff;
`;

const ControlButton = styled.div `
 display: flex;
`;
export {
    SaveFormButton,
    EditFormButton,
    DeleteFormButton,
    ControlButton,
}