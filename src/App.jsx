import { RouterProvider, createBrowserRouter } from "react-router-dom"



import Hero from "./components/pages/Hero"
import CricketPage from "./components/pages/cricket/CricketPage"
import CricketHomePage from "./components/pages/cricket/CricketHomePage"
import TeamsPage from "./components/pages/cricket/TeamsPage"
import RootLayout from "./components/pages/Root"
import CricketRoot from "./components/pages/cricket/CricketRoot"
import SelectedPlayers from "./components/pages/cricket/SelectedPlayers"

import TeamsRoot from "./components/pages/Teams/TeamsRoot"
import PlayersRoot from "./components/pages/players/PlayersRoot"

import TournamentTeams from "./components/pages/Teams/TournamentTeams"
import PlayersRoute from "./components/pages/players/PlayersRoute"
import TournamentRoot from "./components/pages/tournaments/TournamentRoot"
import TournamentPage from "./components/pages/tournaments/TournamentPage"
import AddPlayerData from "./components/pages/tournaments/AddPlayerData"
import UpdatePlayerDetails from "./components/pages/tournaments/UpdatePlayerData"
import AddPlayerDetailsPage from "./components/pages/tournaments/AddPlayerDetailsPage"



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Hero /> },
      {
        path: "cricket",
        element: <CricketRoot />,
        children: [
          { index: true, element: <CricketHomePage /> },
          { path: "tournaments", element: <CricketPage /> },
          { path: "teams/:country_1/vs/:country_2", element: <TeamsPage /> },
          { path: "/cricket/teams/:country_1/:country_2/selected_players", element: <SelectedPlayers /> },
          {
            path: "selectedteams",
            element: <TeamsRoot />,
            children: [
              { index: true, element: <TournamentTeams /> },
            ]
          },
          {
            path: "players",
            element: <PlayersRoot />,
            children: [
              { index: true, element: <PlayersRoute /> }
            ]
          },
          {
            path: "icc_world_cup",
            element: <TournamentRoot />,
            children: [
              { index: true, element: <TournamentPage /> },
              {path: ":country_1/vs/:country_2/add_player_data", element: < AddPlayerData />},
              {path: ":country_1/vs/:country_2/add_player_detail/:id", element: <AddPlayerDetailsPage />},
              {path: "/cricket/icc_world_cup/:country_1/vs/:country_2/updateplayer/:id", element: <UpdatePlayerDetails /> },
            ]
          },

        ]
      },

    ]
  }

])

function App() {
  return <RouterProvider router={router} />

}

export default App
