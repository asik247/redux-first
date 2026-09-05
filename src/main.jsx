import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routers/Router.jsx'
import Root from './Root/Root.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
// import AuthProvider from './Context/AuthProvider.jsx'
// const reduxProvider = 
createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <AuthProvider>

    </AuthProvider> */}



    {/* Redux provider */}
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </Provider>

  </StrictMode>,
)
