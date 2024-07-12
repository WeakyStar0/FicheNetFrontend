import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as gameLoader, GamePage } from './Pages/GamePage';
import { loader as addonLoader, AddonsPage } from './Pages/AddonsPage';
import { loader as libraryLoader, LibraryPage } from './Pages/LibraryPage';
import Sobre from './Pages/Sobre';
import { Home } from './Pages/Home';
import Login from './Pages/Login'
import Register from './Pages/Register';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});
export default api;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'game/:gameId',
        loader: gameLoader,
        element: <GamePage />,
      },
      {
        path: 'addon/:gameId',
        loader: addonLoader,
        element: <AddonsPage />,
      },
      {
        path: 'library',
        loader: libraryLoader,
        element: <LibraryPage />,
      },
      {
        path: 'about',
        element: <Sobre />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
