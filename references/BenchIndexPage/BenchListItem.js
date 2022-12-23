import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchBench } from '../../store/benches';

const BenchListItem = ({bench}) => {
    const hist = useHistory()
    const dispatch = useDispatch()
    const handleClick = e =>{
        e.preventDefault();
        hist.push(`/benches/${bench.id}`)
    }

    // useEffect(()=>{
    //    dispatch(fetchBench(`/benches/${bench.id}`))
    // }, [dispatch])

    if(!bench) return null

    return(
        <div onClick={handleClick}>
            <h2>{bench.title}</h2>
            <p>{bench.price}</p>
        </div>
    )

}

export default BenchListItem;