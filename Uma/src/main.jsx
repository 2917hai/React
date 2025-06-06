
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Mystore from "./Todostore.jsx"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <Provider store={Mystore}>
    <App />
  </Provider>
)
