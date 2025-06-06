
import { createRoot } from 'react-dom/client'
import Store from './Store.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<Provider store={Store}>
<App />
</Provider>
   

)
