import { HullGraph } from "../components/Graph/HullGraph";
import { LineGraph } from "../components/Graph/LineGraph";
import { ScatterGraph } from "../components/Graph/ScatterGraph";
import { InputLine } from "../components/Input/InputLine";
import { InputHull } from "../components/Input/InputHull";


export const Test = () =>{
    const data = [
      { x: 100, y: 200},
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
      {x: -1,y:-200,z:200}
    ];
    const dataLine = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 30, y: 20 }
    ];
    return (
        <>
            {/* <h1>Scatter</h1>
            <ScatterGraph data={data} width={null} height={null}/>
         
            <h1>Hull</h1>
            <HullGraph dataScatter={data} dataLine={dataLine} width={null} height={null}/>

            <h1>Line</h1>
            <LineGraph data1={[data[0],data[1]]} data2={[dataLine[0],dataLine[1]]} width={null} height={null}/>

            <h1></h1> */}
            {/* <InputLine/> */}
            {/* <InputHull/> */}
        </>
    );
}