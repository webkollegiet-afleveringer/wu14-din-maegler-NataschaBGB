import { createBrowserRouter, RouterProvider } from "react-router"
import { homePageLoader } from "./loaders/homePageLoader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { homesLoader } from "./loaders/homesLoader";
import Houses from "./pages/Houses";
import House from "./pages/House";
import { brokersLoader } from "./loaders/brokersLoader";
import Brokers from "./pages/Brokers";
import { brokerLoader } from "./loaders/brokerLoader";
import Broker from "./pages/Broker";
import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { houseLoader } from "./loaders/houseLoader";


export default function App() {

  const browserRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        loader: homePageLoader,
        hydrateFallbackElement: <p>Indlæser Hjem...</p>,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/houses',
        element: <Houses />,
        loader: homesLoader,
        hydrateFallbackElement: <p>Indlæser alle hjem...</p>
      },
      {
        path: '/houses/:houseId',
        element: <House />,
        loader: houseLoader,
        hydrateFallbackElement: <p>Indlæser hjem...</p>,
      },
      {
        path: '/brokers',
        element: <Brokers />,
        loader: brokersLoader,
        hydrateFallbackElement: <p>Indlæser mæglere...</p>,
      },
      {
        path: '/brokers/:brokerId',
        element: <Broker />,
        loader: brokerLoader,
        hydrateFallbackElement: <p>Indlæser mægler...</p>,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />
      }
    ],
    {
      basename: "/wu14-din-maegler-NataschaBGB/"
    }
  );

  return (
    <RouterProvider router={browserRouter} />
  )
}