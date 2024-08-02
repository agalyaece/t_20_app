import { useParams } from "react-router-dom";
import axios from "../../../../axios.js"
import { useCallback, useEffect, useState } from "react";


export default function SelectedPlayers({ onClick }) {

  const { country_1, country_2 } = useParams();
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await axios.get(`/cricket/teams/${country_1}/${country_2}/selected_players`);
      const players = data.data;
      setSelectedPlayers(players)
      console.log(players)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [country_1, country_2]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);


  return <>
    <div tabIndex="-1" aria-hidden="true" className="flex flex-col overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Selected players
            </h3>
            <button onClick={onClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only" >Close modal</span>
            </button>
          </div>



          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching data: {error.message}</p>
          ) : (
            <div className="p-4 md:p-5">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Get the possible winning team here.</p>
              {selectedPlayers.map((item, index) => (
                <div key={index}>
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-5">{item.country_1} vs {item.country_2}</h2>
                  {(item.teams).map((team, teamIndex) => (


                    <div key={teamIndex} >
                      {/* //className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-auto" */}

                      <div className=" items-center mt-5 justify-center h-screen sm:h-64 xl:h-80 2xl:h-96 overflow-auto  bg-gray-200 dark:bg-gray-700 dark:text-white">
                        <ul className="my-4 space-y-3 ">
                          {(team.players).map((player, playerIndex) => (

                            <li key={playerIndex}>
                              <p className="text-sm  p-4 font-semibold underline text-gray-900 dark:text-white">Team {playerIndex + 1}</p>
                              {player.length > 0 ? (
                                player.map((innerPlayer, innerPlayerIndex) => (
                                  <div key={innerPlayerIndex} >
                                    
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                      {innerPlayer.player_name_x} ({innerPlayer.country}) ---
                                    </span>
                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ms - 3 text - xs font - medium text - gray - 500 bg - gray - 200 rounded dark: bg - gray - 700 dark:text-gray-400">
                                      {innerPlayer.role}
                                    </span>
                                  </div>
                                ))) : (
                                <p>No players for this team.</p>)

                              }
                            </li>

                          ))}


                        </ul>
                      </div>

                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div >








  </>

}




