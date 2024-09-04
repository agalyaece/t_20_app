import { useEffect, useState } from "react";
import PlayerPerformance from "./PlayerPerformance";
import axios from "../../../../axios"

export default function PerformancePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error] = useState();
    const [fetchedEvents, setFetchedEvents] = useState()

    async function fetchData() {
        setIsLoading(true)
        const data = await axios.get("/cricket/performance")
        // console.log(data)
        setFetchedEvents(data.data)
        setIsLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return <>
        <div style={{ textAlign: 'center' }}>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
        {!isLoading && fetchedEvents  && <PlayerPerformance playerData={fetchedEvents} />}

    </>
}




