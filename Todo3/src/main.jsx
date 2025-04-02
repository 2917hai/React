
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoStore from './TodoStore.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<Provider store={TodoStore}>
<App />
</Provider>
)
