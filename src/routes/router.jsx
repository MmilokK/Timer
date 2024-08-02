import { createBrowserRouter } from "react-router-dom";
import TimerDisplayPage from '../pages/TimerDisplayPage.jsx'
import TimerSetupPage from '../pages/TimerSetupPage.jsx'
import TimersPage from "../pages/TimersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TimersPage />,
  },
  {
    path: "/timer-display",
    element: <TimerDisplayPage />,
  },
  {
    path: "/timer-setup",
    element: <TimerSetupPage />,
  },
]);

export default router
