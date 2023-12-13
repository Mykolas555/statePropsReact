import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './StudentProps';
import CounterUseState from './CounterState';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student/>
      <CounterUseState />
    </>
  );
}

export default App;
