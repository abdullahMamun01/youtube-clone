
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feeds from './components/Feeds'
import Root from './components/Layout/Root'
import VideoDetails from './pages/VideoDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Feeds />
      } ,
      {
        path:'/video/:videoId' ,
        element : <VideoDetails/>
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
