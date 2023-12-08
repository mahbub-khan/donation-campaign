import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MyDonations from "../pages/MyDonations/MyDonations";
import Statistics from "../pages/Statistics/Statistics";
import Donation from "../pages/Donation/Donation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation_data.json"),
      },
      {
        path: "/mydonations",
        element: <MyDonations></MyDonations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation_data.json"),
      },
      {
        path: "/donation/:id",
        element: <Donation></Donation>,
        loader: () => fetch("/donation_data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
