import {Provider} from "react-redux";
import Body from "./components/Body";
import NavHeader from "./components/NavHeader";
import store from "./redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainBodyContainer from "./components/MainBodyContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainBodyContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <NavHeader />

      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
