import { useState } from "react"

export default function Batsman (){


    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handleSingle =()=>{
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleSix = () =>{
        const updateRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updateRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {runs > 50 && <p>Your score: 50</p>}
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}