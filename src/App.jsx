import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DateInputs from './components/DateInputs';
import LifePathResult from './components/LifePathResult'

function App() {

  return (
    <>
    < Header />
    <Main >
      < DateInputs />
      < LifePathResult />
    </Main>
    < Footer />
    </>
  )
}

export default App
