import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import Error from "./pages/Error";

export default function App() {

  const browserRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
        // ----- 
        // load 4 homes in "Udvalgte Boliger" section 
        // load 3 brokers in "Mød vores engagerede medarbejdere" section 
        // on the homepage. 
        // -----
        // loader: homesLoader,
        // hydrateFallbackElement: <p>Indlæser Hjem...</p>,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
        // -----
        // login form with email and password fields, and a submit button. 
        // on submit, validate the input and show error messages if necessary.
        // fetch('https://dinmaegler.onrender.com/auth/local', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     identifier: "email",
        //     password: "password"
        //   })
        // })
        // if login is successful, redirect to the homepage. 
        // -----
        // loader: homesLoader,
        // hydrateFallbackElement: <p>Indlæser alle hjem...</p>,
      // },
      // {
      //   path: '/register',
      //   element: <Register />
      // },
      // {
      //   path: '/houses',
      //   element: <Houses />,
      //   loader: homesLoader,
      //   hydrateFallbackElement: <p>Indlæser alle hjem...</p>,
      // },
      // {
      //   path: '/house/:houseId',
      //   element: <House />,
        // loader: houseLoader,
        // hydrateFallbackElement: <p>Indlæser hjem...</p>,
      // },
      // {
      //   path: '/brokers',
      //   element: <Brokers />,
      //   loader: brokersLoader,
      //   hydrateFallbackElement: <p>Indlæser mæglere...</p>,
      // },
      // {
        // path: '/broker/:brokerId',
        // element: <Broker />,
        // loader: brokerLoader,
        // hydrateFallbackElement: <p>Indlæser mægler...</p>,
      // },
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