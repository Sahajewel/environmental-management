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
import Products from "./Components/Products/Products"
import DonateNow from "./Dashboard/Donor/DonateNow/DonateNow"
import AdminRoutes from "./Components/PrivateRoute/AdminRoutes"
import VolunteerRotes from "./Components/PrivateRoute/VolunteerRotes"
import DonorRoutes from "./Components/PrivateRoute/DonorRoutes"

const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <PrivateRoute><About /></PrivateRoute> },
    { path: "products", element: <PrivateRoute><Products /></PrivateRoute> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ]
 },
 {
  path: "/dashboard",
  element: <PrivateRoute><Dashboard /></PrivateRoute>,
  children: [
    { index: true, element: <DefaultDashboard /> },
    { path: "overview", element: <AdminRoutes><Overview /></AdminRoutes> },
    { path: "available-events", element: <VolunteerRotes><AvailableEvents /></VolunteerRotes> },
    { path: "my-donation", element: <DonorRoutes><MyDonation /></DonorRoutes> },
    { path: "donate", element: <DonateNow /> },
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
