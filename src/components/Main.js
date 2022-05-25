import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const week_list = [ "일", "월", "화", "수", "목", "금", "토"];
  const history = useHistory();
  // const day = new Date().getDay();
  // const today = week_list[day] + '요일';
  
  // week_list.forEach(() => { })
 

  // console.log(today)

  const date = new Date().getDay();

  

  const daytoo = week_list.map((v, i) => {
    return i <= date  ? week_list[ i + date ] : week_list[i-5];
  });
  console.log(daytoo);

  const circle = [0, 1, 2, 3, 4];

  let rate_sum = 0;

  const week_rates = week_list.map((w, idx) => {
    const random = Math.floor(Math.random() * 5)+1
     
    return rate_sum += random;
   
  });

  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = React.useState(rate_avg);

  // const randomCircle = Math.floor(Math.random() * 5)+1;
  // console.log(randomCircle)

  return (
    <div className="Wrap">
      <h3>내 일주일은 ?</h3>

      {week_list.map((list, index) => {
        const randomCircle = Math.floor(Math.random() * 5) + 1

        return (
          <div className="weekWrap">
            <h4 key={index} style={{ paddingRight: "10px" }}>
              {list}
            </h4>
            {circle.map((item, i) => {
              return (
                <Circle
                  key={i}
                  style={{
                    backgroundColor: i <= randomCircle ? "gold" : "#ddd",
                  }}
                />
              );
            })}

            {/* {Array.from({ length: 5 }, (item, idx) => {        
              return <Circle key={idx} />;
            })} */}

            <div
              className="triangle"
              onClick={() => {
                history.push(`/detail/${list}`);
              }}
            ></div>
          </div>
        );
      })}
      <AvgWrap>
        <h3>평균 평점</h3>
        <h3>{avg}</h3>
        <ResetBtn
          onClick={() => {
            setAvg(parseInt(0).toFixed(1));
          }}
        >
          Reset
        </ResetBtn>
      </AvgWrap>
    </div>
  );
};

export default Main;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 10px;
`;
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