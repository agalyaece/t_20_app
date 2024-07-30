import PropTypes from "prop-types"

function SelectedTeamComponent({ team }) {
  return (
    <div>
      <h3>Team {team.teamIndex + 1}</h3>
      <ul>
        {(team.players).map((player, playerIndex) => (
          <li key={playerIndex}>
            {/* Render player information */}
            {player.player_name_x} {player.role}
          </li>
        ))}
      </ul>
    </div>
  );
}


SelectedTeamComponent.propTypes = {
    team: PropTypes.any,
};
export default SelectedTeamComponent;


