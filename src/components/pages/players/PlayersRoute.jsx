import { useEffect, useState } from "react";
import axios from "../../../../axios.js"
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function PlayersRoute() {

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerName, setPlayerName] = useState(''); // Initialize playerName
  const [teamPlayerCounts, setTeamPlayerCounts] = useState({}); // New state

  async function fetchData() {
    try {
      const response = await axios.get('/cricket/players');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchTeam(country) {
    if (!country) return; // Handle empty team selection

    try {
      const data = await axios.get(`/cricket/players/${country}`);
      setSelectedPlayers(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTeam(selectedTeam); // Call fetchTeam only when selectedTeam changes
  }, [selectedTeam]);

  const handleEventChange = (eventName) => {
    setSelectedEvent(eventName); // Set the entire object for other uses
    setSelectedTeam(null); // Reset team selection on event change
  };

  const handleTeamChange = (teamId) => {
    setSelectedTeam(teamId);
    fetchTeam(teamId); // Pass the team name to fetchTeam
  };

  const filteredTeams = selectedEvent
    ? events.find((event) => event._id === selectedEvent)?.teams || []
    : [];

  useEffect(() => {
    // Initialize teamPlayerCounts with all teams and 0 player count
    const teamPlayerCountsInitial = events.reduce((acc, event) => {
      event.teams.forEach((team) => {
        acc[team.name] = 0;
      });
      return acc;
    }, {});
    setTeamPlayerCounts(teamPlayerCountsInitial);
  }, [events]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      event: selectedEvent,
      team: selectedTeam,
      name: playerName,
    };

    try {
      // Check limit for the selected team
      if (teamPlayerCounts[selectedTeam] < 11) {
        const response = await axios.post('/cricket/players/addplayer', data);
        console.log('Data posted successfully:', response.data);
        setPlayerName('');

        // Update teamPlayerCounts with a new object for the selected team
        setTeamPlayerCounts({
          ...teamPlayerCounts,
          [selectedTeam]: (teamPlayerCounts[selectedTeam] || 0) + 1, // Initialize to 0 if not present
        });

        toast.success(response.data.msg, { position: 'top-right' });
      } else {
        alert('Maximum 11 players allowed per team!');
      }
    } catch (error) {
      console.error('Error adding player:', error);
      toast.error(error.msg, { position: 'top-right' });
      // Handle error, e.g., show error message to user
    }
  }

  const handleInput = (event) => {
    const { value } = event.target;
    setPlayerName(value); // Create a new object with updated value
  };

  return <>
    <Link to={"/cricket"}>
      <button type="button" className="w-full flex items-center justify-center m-20 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-200 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
        <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </button>
    </Link>
    <label htmlFor="event_name" className="block mb-2 ml-5 text-sm font-medium text-gray-900 dark:text-white">Select your Event</label>
    <select
      id="event_name"
      value={selectedEvent}
      onChange={(e) => handleEventChange(e.target.value)}
      className={`bg-gray-50 border border-gray-300 ml-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
        // Responsive width classes can be customized here
        window.innerWidth < 768 ? "w-full" : "w-1/2"
        }`}    >
      <option value="">Select Event</option>
      {events.map((event) => (
        <option key={event._id} value={event._id}>
          {event.event_name}
        </option>
      ))}

    </select>

    <br />

    <label htmlFor="teams" className="block mb-2 text-sm ml-5 font-medium text-gray-900 dark:text-white">Select  Teams</label>
    <select
      id="teams"
      value={selectedTeam}
      onChange={(e) => handleTeamChange(e.target.value)}
      className={`bg-gray-50 border border-gray-300 ml-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
        // Responsive width classes can be customized here
        window.innerWidth < 768 ? "w-full" : "w-1/2"
        }`}    >
      <option value="">Select Team</option>

      {filteredTeams.map((team) => (
        <option key={team.name} value={team.name}>
          {team.name}
        </option>
      ))}
    </select>

    <div>
      <h2 className="block mt-4 text-sm font-medium ml-5 text-gray-900 dark:text-white">Players for {selectedEvent?.event_name}</h2>
      {selectedPlayers.length > 0 ? (
        <ul className={`bg-gray-50 border border-gray-300 ml-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${window.innerWidth < 768 ? "w-full" : "w-1/2"}`} // Added closing parenthesis
        >
          {selectedPlayers.map((player) => (
            <li key={player._id} className="w-full px-4 py-2  border-b border-gray-200 rounded-t-lg dark:border-gray-600">{player.player_name} ({player.role})</li>
          ))}
        </ul>
      ) : (
        <p className="block mt-4 text-sm font-bold ml-5 text-gray-900 dark:text-white">No players found for this team.</p>
      )}
    </div>

    <form onSubmit={handleSubmit}>
      <div className="mt-5">

        <>
          <label htmlFor="name" className="block mb-2 ml-5 text-sm font-medium text-gray-900 dark:text-white">Enter a Player Name to be included in a tournament</label>
          <input type="text" id="name" className={`bg-gray-50 border border-gray-300 ml-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${window.innerWidth < 768 ? "w-full" : "w-1/2"}`}
            placeholder="Player Name (only characters allowed)"
            required
            value={playerName}
            onChange={handleInput}
            pattern="^[a-zA-Z ]*$"
          />
          {/* <p className="text-gray-500 block mb-2 ml-5 text-sm font-medium"> {remainingSlotsCount} Player Slots Remaining </p> */}
        </>


      </div>


      <button type="submit"
        className="text-white m-5             bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
     focus:ring-blue-300 font-medium rounded-lg text-sm w-1/4 sm:w-1/4 px-5 py-2.5 text-center dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      // disabled={remainingSlots <= 0}
      >
        Submit
      </button>
    </form>
  </>
}


