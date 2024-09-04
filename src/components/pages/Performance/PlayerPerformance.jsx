import PropTypes from "prop-types";

function PlayerPerformance({ playerData }) {
  return (
    <>
      <div className="flex justify-center items-center relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:max-w-3xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Player Name
              </th>
              <th scope="col" className="px-6 py-3">
                Runs
              </th>
              <th scope="col" className="px-6 py-3">
                Wickets
              </th>
              <th scope="col" className="px-6 py-3">
                Team
              </th>
            </tr>
          </thead>
          <tbody>
            {playerData.map((player) => (
              <tr key={player._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {player._id}
                </th>
                <td className="px-6 py-4">
                  {player.totalRuns}
                </td>
                <td className="px-6 py-4">
                  {player.totalWickets}
                </td>
                <td className="px-6 py-4">
                  {player.team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

PlayerPerformance.propTypes = {
  playerData: PropTypes.any,
};

export default PlayerPerformance;