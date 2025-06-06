
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Todostore from './Todostore.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={Todostore}>
<App />
</Provider>
 

)
