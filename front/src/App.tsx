import './App.css';
import { AppRouter } from './AppRouter';
import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
