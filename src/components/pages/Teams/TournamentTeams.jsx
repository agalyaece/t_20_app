

import { useEffect, useState } from "react";
import axios from "../../../../axios.js"
import Teams from "./Teams.jsx";




export default function TournamentTeams() {

  const [isLoading, setIsLoading] = useState(false);

  const [error] = useState();
  const [fetchedEvents, setFetchedEvents] = useState()

  async function fetchData() {
    setIsLoading(true)

    const data = await axios.get("/cricket/selectedteams")
    // console.log(data)
    setFetchedEvents(data)
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
    {!isLoading && fetchedEvents && <Teams events={fetchedEvents} />}
   
  </>
}


