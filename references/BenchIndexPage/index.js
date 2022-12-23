import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBenches } from "../../store/benches";
import BenchList from "./BenchList";



//Diego suggests that the logic from bench list should go straight into index instead
// namely the logic from lines BenchList.js return statement
//

const BenchIndexPage = () => {
    const benches = useSelector(state => Object.values(state.benches))
    const dispatch = useDispatch()

    useEffect(()=> {


        dispatch(fetchBenches())

    },[])

    return(
        <div>
            <BenchList  benches={benches}/>

        </div>
    )



}
export default BenchIndexPage;