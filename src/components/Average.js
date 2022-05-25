import React from "react";
import styled from "styled-components";

const Average = () => {
    return (
      <AvgWrap>
            <h3>평균 평점</h3>
            
        <ResetBtn>Reset</ResetBtn>
      </AvgWrap>
    );
        
        
};


export default Average;

const AvgWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;


const ResetBtn = styled.button`
  font-size: 18px;
  color: white;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #2090ff;
  cursor: pointer;
`;