import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Average from "./Average";

const Main = () => {
  const week_list = ["월", "화", "수", "목", "금", "토", "일"];
  const history = useHistory();

  const circle = [0, 1, 2, 3, 4];


  // const random = Math.floor(Math.random() * 5);
  // console.log(random)

  return (
    <div className="Wrap"> 
      <h3>내 일주일은 ?</h3>

      {week_list.map((list, index) => {
       
       const randomCircle = Math.floor(Math.random() * 5);
     
        return (
          <div className="weekWrap">
            <h4 key={index} style={{ paddingRight: "10px" }}>
              {list}
            </h4>
            {circle.map((item, i) => {
               
              console.log('랜덤',randomCircle,'인덱스',i)
              return <Circle key={i}
                style={{backgroundColor: i <= randomCircle ? 'gold' : '#ddd'}}/>
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

      <Average/>
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