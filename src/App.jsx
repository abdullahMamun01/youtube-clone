import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feeds from './components/Feeds'
import Root from './components/Layout/Root'
import VideoDetails from './pages/VideoDetails'
import ChannelScreen from './pages/ChannelScreen'
import Sidebar from './components/Sidebar'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Feeds />
      },
      {
        path: '/video/:videoId',
        element: <VideoDetails />
      },
      {
        path: '/channel/:channelId',
        element: 
        <div className='flex gap-2 max-[768px]:w-full w-[95%] mx-auto justify-center'>
          <div className='md:basis-[20%] md:block max-[768px]:hidden'>
            <Sidebar />
          </div>
          <div className='w-full max-[768px]:basis-[95%] basis-[80%]  '>
            <ChannelScreen />
          </div>
        </div>
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
