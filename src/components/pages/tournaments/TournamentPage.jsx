import { useEffect, useState } from "react"
import axios from "../../../../axios.js"
import TournamentCard from "./TournamentCard.jsx";

export default function TournamentPage() {


  const [isLoading, setIsLoading] = useState(false);

  const [error] = useState();
  const [fetchedTournaments, setFetchedTournaments] = useState()

  async function fetchData() {
    setIsLoading(true)
    const data = await axios.get("/cricket/icc_world_cup")
    
    setFetchedTournaments(data)
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
    {!isLoading && fetchedTournaments && <TournamentCard events={fetchedTournaments} />}


  </>
}






