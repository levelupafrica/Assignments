import styled from 'styled-components';

const Notes = styled.div `
    background: #fff;
    width: 60%;
    margin: 0 auto;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 10px 10px 12px 0 rgba(46, 60, 73, 0.05);

`;

const NoteTitle = styled.h2 `
    text-align: center;
    font-weight: 400;
    font-size: 40px;
    color: #636363;
    word-wrap: break-word;

`;



const NoteContent = styled.p `
 font-size: 25px;
    font-weight: 200;
    line-height: 2.5rem;
    text-align: center;
    word-wrap: break-word


`;




export {
    NoteContent,
    Notes,
    NoteTitle
}