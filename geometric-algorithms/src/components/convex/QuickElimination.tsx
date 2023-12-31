import { useSortByPolarAngle } from "../../hooks/convexhull/polarangle";
import { useQuickElimination } from "../../hooks/convexhull/quickelimination";
import { HullGraph } from "../Graph/HullGraph";

interface Props{
    data:Points[]
}
interface Points{
    x:number,
    y:number,
}

export const QuickElimination = (props:Props) => {
    const convexHull=useQuickElimination(props.data);
    const sorted:Points[]=useSortByPolarAngle(convexHull);
    
    return (
    <>
        <h1>Quick Elimination</h1>
        {/* <p>The lines are {intersecting?" ":"not "}intersecting</p> */}
        <HullGraph dataLine={sorted} dataScatter={props.data} />
    </>
    );
}