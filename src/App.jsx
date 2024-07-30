import { RouterProvider, createBrowserRouter } from "react-router-dom"



import Hero from "./components/pages/Hero"
import CricketPage from "./components/pages/cricket/CricketPage"
import CricketHomePage from "./components/pages/cricket/CricketHomePage"
import TeamsPage from "./components/pages/cricket/TeamsPage"
import RootLayout from "./components/pages/Root"
import CricketRoot from "./components/pages/cricket/CricketRoot"
import SelectedPlayers from "./components/pages/cricket/SelectedPlayers"



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
          {index: true, element: <CricketHomePage /> },
          { path: "tournaments", element: <CricketPage /> },
          { path: "teams/:country_1/vs/:country_2", element: <TeamsPage /> },
          { path: "/cricket/teams/:country_1/:country_2/selected_players", element: <SelectedPlayers />}
        ]
      },

    ]
  }

  // 
  // {path:"/", element:<Hero />},
  // {path:"/", element:<Hero />},
  // {path:"/", element:<Hero />},

])

function App() {
  return <RouterProvider router={router} />

}

export default App
