
import './App.css';
import Home from './home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import SellerList from './pages/sellerlist/sellerlist';
import AddNewSeller from './pages/addnewseller/addnewseller';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />, 
      children: [
        
        {
          path:'/sellerlist',
          element: <SellerList/>
          
        },
        {
          path:'/addnewseller',
          element: <AddNewSeller/>
        }
      ]
    },
   
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
      
    </div>
  );
}

export default App;
