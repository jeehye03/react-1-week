import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { week_name } = useParams();
  const history = useHistory();
  const [clicked, setClicked] = React.useState([0]);
   

  React.useEffect(() => {
    const press = (e) => {
      console.log(e);

      // e.key로 받아온(누른 키) 값이 1~5까지 숫자가 맞아?
      // 배열로 담기위해 indexOf
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        // 1~5까지 숫자가 맞으면 state에 담아주기
        setClicked(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    // 화면에서 사라지면 이벤트 삭제 (컴포넌트가 언마운트)
    return () => window.removeEventListener("keydown", press);
  }, []);

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
};

export default Detail;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 10px;
`;

const HighLighte = styled.span`
  border-radius: 15px;
  background-color: yellow;
`;
