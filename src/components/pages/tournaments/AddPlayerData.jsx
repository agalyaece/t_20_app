import { useCallback, useEffect, useState } from "react";
import axios from "../../../../axios"

import { Link, useParams } from "react-router-dom";

export default function AddPlayerData() {
    const [isLoading, setIsLoading] = useState(false);

    const [error] = useState();

    const { country_1, country_2 } = useParams();
    const [country1Players, setCountry1Players] = useState([]);
    const [country2Players, setCountry2Players] = useState([]);
    const [playerData, setPlayerData] = useState([]);



    const fetchTeams = useCallback(async () => {
        try {
            setIsLoading(true)
            const data = await axios.get(`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_data`);
            const players = data.data;
            setCountry1Players(players.filter((player) => player.team === country_1));
            setCountry2Players(players.filter((player) => player.team === country_2));

            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }, [country_1, country_2]);

    useEffect(() => {
        fetchTeams();
    }, [fetchTeams]);

    const fetchPlayerDetails = useCallback(async () => {
        try {
            const data = await axios.get(`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_detail`);
            const players = data.data;
            setPlayerData(players);
            // console.log(players)
        } catch (error) {
            console.log(error);
        }
    }, [country_1, country_2])

    useEffect(() => {
        fetchPlayerDetails();
    }, [fetchPlayerDetails])

    const processedPlayerData = playerData.reduce((acc, player) => {
        acc[player.name] = { ...acc[player.name] || {}, runs: player.runs, wickets: player.wickets };
        return acc;
      }, {});

    return <>
     <Link to={`/cricket/icc_world_cup`}>
        <button type="button" className="w-full flex items-center justify-center m-20 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-200 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>
      </Link>
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error fetching data: {error.message}</p>
        ) : (

            <div className="container mx-auto mb-5"> {/* Center the content horizontally */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10"> {/* Responsive layout */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <h4 className="text-gray-500 px-4 py-2 m-2 cursor-pointer font-bold">
                            Playing-XI {country_1}
                        </h4>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Player name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Runs
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Wickets
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Update
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {country1Players.map((team_1, index) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {team_1.name}
                                        </th>

                                        <td className="px-6 py-3 font-medium ">
                                            {processedPlayerData[team_1.name]?.runs}
                                            {/* {playerData.map(() => (
                                                
                                            ))} */}
                                        </td>
                                        <td className="px-6 py-3 font-medium ">
                                            {processedPlayerData[team_1.name]?.wickets}
                                        </td>
                                        <td className="px-6 py-3">
                                            <Link to={`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_detail/${team_1._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Add Data
                                            </Link>
                                        </td>
                                        <td className="px-6 py-3">
                                            <Link to={`/cricket/icc_world_cup/${country_1}/vs/${country_2}/updateplayer/${team_1._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                                                Update Data
                                            </Link>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>

                        </table>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <h4 className={`text-gray-500 px=20 py-2 m-5 p-2 cursor-pointer font-bold   `}>
                            Playing-XI {country_2}
                        </h4>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Player name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Runs
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Wickets
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Update
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {country2Players.map((team_1, index) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {team_1.name}
                                        </th>
                                        <td className="px-6 py-3 font-medium ">
                                            {processedPlayerData[team_1.name]?.runs}
                                        </td>
                                        <td className="px-6 py-3 font-medium ">
                                            {processedPlayerData[team_1.name]?.wickets}
                                        </td>

                                        <td className="px-6 py-4">
                                            <Link to={`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_detail/${team_1._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Add Data
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/cricket/icc_world_cup/${country_1}/vs/${country_2}/updateplayer/${team_1._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Update Data
                                            </Link>
                                        </td>



                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>


                    </div>
                </div>
            </div >
        )
        }
    </>

}