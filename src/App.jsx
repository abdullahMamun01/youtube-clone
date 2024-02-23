import { RouterProvider, createBrowserRouter } from "react-router-dom";


// import VideoDetails from "./pages/VideoDetails";


import { Suspense, lazy } from "react";
import ErrorPage from "./components/error/ErrorPage";
import Layout from "./components/Layout/Layout";

const Feeds = lazy(() => import("./components/Feeds"));
const Root = lazy(() => import("./components/Layout/Root"));
const ChannelScreen = lazy(() => import("./pages/ChannelScreen"));
const VideoHistory = lazy(() => import("./pages/VideoHistory"));
const Sidebar = lazy(() => import("./components/Layout/Sidebar"));


const VideoDetails = lazy(() => import("./pages/VideoDetails"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}>
      <Root />
    </Suspense>,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}>
          <Feeds />
        </Suspense>,
        errorElement: <ErrorPage />
      },
      {
        path: "/video/:videoId",
        element: <Suspense fallback={<div>Loading...</div>}>
          <VideoDetails />
        </Suspense>,
      },
      {
        path: "/history",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Layout/>
          
          </Suspense>
        ),
        children : [
          {
            path : '' ,
            element : <VideoHistory/>
    
          }
        ]
      },
      {
        path: "/channel/:channelId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Layout/>
          </Suspense>
        ),
        children : [
          {
            path : '' ,
            element : <ChannelScreen/>
          }
        ]
      },
    ],
  },
]);
function App() {

  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
