
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import TodoStore from './TodoStore.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={TodoStore}> 
<App />
</Provider>


)
