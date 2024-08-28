import PropTypes from "prop-types"

function Teams({ events }) {


    return <>
        <div className="bg-gray-100 min-h-screen p-4">
            {events.data && events?.data.map((teamData) => {
                return (
                    <div className="container mx-auto pt-12 pb-20" key={teamData._id}>
                        <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
                            {teamData.event_name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamData.teams.map((team) => {
                                return (
                                    <div className="bg-white rounded-lg shadow-lg p-8" key={team._id}>
                                        <p className="text-l font-bold text-gray-800 mb-4 text-center">{team.name}</p>

                                    </div>
                                )
                            })}


                        </div>
                    </div>
                )
            })}

        </div>

    </>

}

Teams.propTypes = {
    events: PropTypes.any,
};

export default Teams
