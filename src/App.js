import './App.css';
import Header from './Components/Header'
import Pages from './Pages';
import { ActiveUserProvider } from './ActiveUserContext'

function App() {



  return (
    <ActiveUserProvider>
      <Header />
      <main className='container'>
        <Pages />
      </main>
    </ActiveUserProvider>
  );
}

export default App;
