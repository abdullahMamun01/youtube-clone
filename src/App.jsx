import { RouterProvider, createBrowserRouter } from "react-router-dom";


// import VideoDetails from "./pages/VideoDetails";


import { Suspense, lazy } from "react";
import ErrorPage from "./components/error/ErrorPage";

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
            <div className="flex gap-2 max-[768px]:w-full w-[95%] mx-auto justify-center">
              <div className="md:basis-[20%]  max-[768px]:hidden">
                <Sidebar />
              </div>
              <div className="w-full max-[768px]:basis-[95%] basis-[80%] bg-green-900 ">
                <VideoHistory />
              </div>
            </div>
          </Suspense>
        ),
      },
      {
        path: "/channel/:channelId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex gap-2 max-[768px]:w-full w-[95%] mx-auto justify-center">
              <div className="md:basis-[20%]  max-[768px]:hidden">
                <Sidebar />
              </div>
              <div className="w-full max-[768px]:basis-[95%] basis-[80%]  ">
                <ChannelScreen />
              </div>
            </div>
          </Suspense>
        ),
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
