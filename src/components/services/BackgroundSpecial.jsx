import { useEffect, useState } from "react";
import React from "react";
import { useSVGArray } from "../hooks/useSvgArray";

const { svgArray: arraySVGs } = useSVGArray();

console.log(arraySVGs[0]);

const myobjArr = []
const myobjArrFunc = () => {
  for (let i = 0; i < arraySVGs.length; i++) {
    myobjArr[i] = {svg:arraySVGs[i], isAnimating:false}
  }
};


function randomNumber() {
  let random = () => Math.floor(Math.random() * arraySVGs.length);
  let numbers = [random(), random(), random(), random()];
  return numbers;
}

function cargarItem(id, item) {
  return (
    <div id={"BGicon__" + id} className="background__icon">
      {arraySVGs[item]}
    </div>
  );
}

const BackgroundSpecial = () => {
  const [number, setNumber] = useState([0, 1, 2, 3]);
  
  useEffect(() => {
    
    myobjArrFunc()
    myobjArr[1].isAnimating = true
    console.log(myobjArr[1]);


    const interval = setInterval(() => {
      setNumber(randomNumber());
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="background__icons">
        {cargarItem(1, number[0])}
        {cargarItem(2, number[1])}
        {cargarItem(3, number[2])}
        {cargarItem(4, number[3])}
      </div>
    </section>
  );
};
export default BackgroundSpecial;
