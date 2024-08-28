import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../../../axios"
import toast from "react-hot-toast";

export default function AddPlayerDetailsPage() {
  const { country_1, country_2, id } = useParams();
  const navigate = useNavigate();

  const players = {
    team: "",
    name: "",
    runs: "",
    wickets: "",
    country_1,
    country_2,
  };

  const [player, setPlayer] = useState(players);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleUpdateInput = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };
  function handleUpdatePlayer(event) {
    event.preventDefault();
    setButtonDisabled(true);
    axios.post(
      `/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_detail/${id}`,
      player
    );
    setButtonDisabled(false);
    toast.success("Player added successfully!", { position: "top-right" });
    navigate(`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_data`)

  }

  useEffect(() => {
    axios
      .get(`/cricket/icc_world_cup/${country_1}/vs/${country_2}/getOneplayer/${id}`)
      .then((response) => {
        setPlayer({ ...response.data, country_1, country_2 });
      })
      .catch((err) => console.log(err));


  }, [country_1, country_2, id]);



  return (
    <>
      <Link to={`/cricket/icc_world_cup/${country_1}/vs/${country_2}/add_player_data`}>
        <button type="button" className="w-full flex items-center justify-center m-20 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-200 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>
      </Link>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            {country_1} VS {country_2}
          </h2>
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update Player Data
          </h3>
          <form onSubmit={handleUpdatePlayer}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Player Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleUpdateInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={player.name}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="runs"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Runs
                </label>
                <input
                  type="number"
                  pattern="^[0-9\b]+$"
                  min={0}
                  step={1}
                  autoComplete="off"
                  name="runs"
                  onChange={handleUpdateInput}
                  id="runs"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={player.runs}
                  placeholder="Runs Scored"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="wickets"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Wickets
                </label>
                <input
                  type="number"
                  name="wickets"
                  pattern="^[0-9\b]+$"
                  min={0}
                  step={1}
                  autoComplete="off"
                  onChange={handleUpdateInput}
                  id="wickets"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={player.wickets}
                  placeholder="wickets Taken"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <button
                type="submit"
                disabled={buttonDisabled}
                className="text-black bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add Player Data
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}