import BenchListItem from "./BenchListItem";


const BenchList = ({benches}) => {

    return(
        <>
            <h1>Benches</h1>
            {benches.map((bench, idx)=>( 
                <BenchListItem bench={bench}  key={idx}/>
            ))
            }
            
        </>
    )

}

export default BenchList;