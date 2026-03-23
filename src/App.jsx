import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import Error from "./pages/Error";

export default function App() {

  const browserRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />
        // loader: loadUserAndPets,
        // hydrateFallbackElement: <p>Loading User...</p>,
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  );

  return (
    <RouterProvider router={browserRouter} />
  )
}