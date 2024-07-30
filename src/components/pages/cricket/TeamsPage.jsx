import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../../../axios.js";
import SelectedPlayers from "./SelectedPlayers.jsx";
import Modal from "./Modal.jsx";

export default function TeamsPage() {
  const { country_1, country_2 } = useParams();
  const [country1Players, setCountry1Players] = useState([]);
  const [country2Players, setCountry2Players] = useState([]);



  const [modalIsVisible, setModalIsVisible] = useState(false)


  const fetchTeams = useCallback(async () => {
    try {
      const data = await axios.get(`/cricket/teams/${country_1}/vs/${country_2}`);
      const players = data.data;
      setCountry1Players(players.filter((player) => player.country === country_1));
      setCountry2Players(players.filter((player) => player.country === country_2));
    } catch (error) {
      console.log(error);
    }
  }, [country_1, country_2]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function showModalHandler() {
    setModalIsVisible(true)
  }

  return (
    <>
      <Link to={"/cricket/tournaments"}>
        <button type="button" className="w-full flex items-center justify-center m-20 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-200 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>
      </Link>
      {country1Players.length === 0 && country2Players.length === 0 ? (
        <p>Loading teams...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-10 ml-10 mr-10 ">

          <div className="team-card  bg-white border border-gray-200 rounded-lg shadow p-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-2">
              {country_1}
            </h5>
            {country1Players.map((countryTeam) => (
              <div key={countryTeam._id}>
                <ul role="list" className=" divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {countryTeam.player_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {countryTeam.role}
                        </p>
                      </div>
                    </div>
                  </li><hr />
                </ul>
              </div>
            ))}
          </div>

          <div className="team-card bg-white border border-gray-200 rounded-lg shadow p-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-2">
              {country_2}
            </h5>
            {country2Players.map((countryTeam) => (
              <div key={countryTeam._id}>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {countryTeam.player_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {countryTeam.role}
                        </p>
                      </div>
                    </div>
                  </li><hr />
                </ul>
              </div>
            ))}

          </div>

        </div>

      )}
      <div className="flex justify-center mt-10">

        <button onClick={showModalHandler}
          type="button" //data-modal-target="crypto-modal" data-modal-toggle="crypto-modal"
          className="px-12 py-5 m-5 p-10 justify-center text-base font-xl text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  border border-gray-200  font-medium  
            dark:border-gray-700 dark:text-white "
        >
          Get Teams
        </button>

      </div>

      <div>
        {modalIsVisible && (<Modal onClose={hideModalHandler} >
          <SelectedPlayers onClick={hideModalHandler} />
        </Modal>)}
      </div>
    </>
  );
}
