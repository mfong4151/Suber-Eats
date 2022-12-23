import { useState } from "react"
import { useDispatch } from "react-redux"
import { createBench } from "../../store/benches"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useInput } from "../../frontend/src/hooks"

const BenchForm = ()=>{ 
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [numSeats, setNumSeats] = useState(0)
    const hist = useHistory()
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault();
        const bench = {
            title,
            description,
            price, 
            seating: numSeats,
            // lat: location.search('lat'),
            // lng: location.search('lng') 
            lat: 0,
            lng: 0
        };
        return dispatch(createBench(bench))
            .then(() => hist.push("/"))
            .catch(async res => {
                let data; 
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) {
                    setErrors(data.errors)
                } else if (data) {
                    setErrors([data])
                }
                else {
                    setErrors([res.statusText])
                };
            });
        }

    return(
        <>
            <h1>Make a new Benchod</h1>

            <form onSubmit={handleSubmit}>
                <label>Title
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>

                <label>Price
                    <input type="number" value={price} onChange={e=> setPrice(e.target.value)}/>
                </label>
                <label>Description
                    <textarea value={description} onChange={e=> setDescription(e.target.value)}/>
                </label>

                <label>Seats
                    <input type="number" value={numSeats} onChange={e=> setNumSeats(e.target.value)}/>
                </label>
                {/* {"there should be disabled inputs for lat and lng here"} */}

                <button type="submit">Submit a Benchod</button>
            </form>
        </>
    )
    
}

export default BenchForm;