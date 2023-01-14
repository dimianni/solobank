import './App.css';
import Header from './Components/Header'
import Pages from './Pages';
import { ActiveUserProvider } from './ActiveUserContext'
import { AllUsersProvider } from './AllUsersContext';

function App() {

  return (
    <AllUsersProvider>
      <ActiveUserProvider>
        <Header />
        <main className='main container'>
          <Pages />
        </main>
      </ActiveUserProvider>
    </AllUsersProvider>

  );
}

export default App;
