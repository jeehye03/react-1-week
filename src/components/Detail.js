import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { week_name } = useParams();
    const history = useHistory();
    const [clicked, setClicked] = React.useState([0]);




  return (
    <>
      <h3>
        <HighLighte>{week_name}요일</HighLighte> 평점 남기기
      </h3>
      <div className="weekWrap">
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <Circle
              key={idx}
              style={{
                backgroundColor: clicked < idx + 1 ? "lightgray" : "gold",
              }}
              onClick={() => setClicked(idx + 1)}
            />
          );
        })}
      </div>

      <button
        className="saveBtn"
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </button>
    </>
  );
}


export default Detail;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color:lightgray;
  margin-right: 10px;
`;

const HighLighte = styled.span`
border-radius: 15px;
background-color: yellow;

`