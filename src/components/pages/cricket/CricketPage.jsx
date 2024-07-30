import { useEffect, useState } from "react"
import axios from "../../../../axios.js"
import TournamentsPage from "./TournamentsPage.jsx";

export default function CricketPage() {

  const [isLoading, setIsLoading] = useState(false);

  const [error] = useState();
  const [fetchedTournaments, setFetchedTournaments] = useState()

  async function fetchData() {
    setIsLoading(true)
    const data = await axios.get("/cricket/tournaments")
    console.log(data)
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
    {!isLoading && fetchedTournaments && <TournamentsPage events={fetchedTournaments} />}



  </>
}
