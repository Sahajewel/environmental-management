import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./assets/Pages/Home/Home"
import Layout from "./Layout/Layout"
import About from "./assets/Pages/About/About"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import Dashboard from "./Dashboard/Dashboard"
import Overview from "./Dashboard/Admin/Overview/Overview"
import AvailableEvents from "./Dashboard/Volunteer/AvailableEvents/AvailableEvents"
import MyDonation from "./Dashboard/Donor/MyDonation/MyDonation"
import DefaultDashboard from "./Dashboard/DefaultDashboard"

const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <PrivateRoute><About /></PrivateRoute> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ]
 },
 {
  path: "/dashboard",
  element: <PrivateRoute><Dashboard /></PrivateRoute>,
  children: [
    { path: "", element: <DefaultDashboard /> },
    { path: "overview", element: <Overview /> },
    { path: "available-events", element: <AvailableEvents /> },
    { path: "my-donation", element: <MyDonation /> },
  ]
 }
])

function App() {
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App
