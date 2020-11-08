import styled from 'styled-components';
import { FaExchangeAlt } from 'react-icons/fa';


export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F2EBDC;
  font-family: 'Ubuntu', sans-serif;
`;

export const Row = styled.div`  
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 50%;
  @media (max-width: 1366px) {
    width: 65%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 350px;
  border-radius: 10px;
  border: 3px solid #363C40;
  box-shadow: 0 10px 6px -6px #777;
  `;

export const ListLabelText = styled.h1`
  color: #ffff;
`;

export const ListLabel = styled.div` 
  display: flex;
  height: 60px; 
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color:#0B7F8C;
  `;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: start;
  padding-top: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #ffff; 
  `;
 
 export const ListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: burlywood;
  width: 50%;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color:#84D0D9;
  transition: 0.3s;
  :hover {
    background-color: #BF472C;
    color: white; 
    width: 60%;
    box-shadow: inset 0 0 5px gold, 0 0 5px red; 
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
    cursor: pointer;
  }
`;

export const Icon = styled(FaExchangeAlt)`
  
  color: #4B4A50;
  font-size: 64px;
`;