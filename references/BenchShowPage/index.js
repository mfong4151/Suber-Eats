import {useParams, useHistory } from 'react-router-dom';
import { useSelector,  useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBench } from '../../store/benches';

const BenchShowPage = () => {
    
    const {benchId} = useParams()
    const bench = useSelector(state => state.benches[benchId])
    const dispatch = useDispatch()
    //const hist = useHistory()

    useEffect(()=>{

        dispatch(fetchBench(benchId))
    }, [dispatch, benchId])


    return(

        <div>
            <h1>Bench Show Page</h1>
            <h2>{bench.title}</h2>
            <Link to="/" >Return to Index Page</Link>
            <p>{bench.description}</p>
            <ul>
                <li>{bench.seating}</li>
                <li>{bench.lat}</li>
                <li>{bench.lng}</li>
            </ul>
        </div>

    )

}



export default BenchShowPage;