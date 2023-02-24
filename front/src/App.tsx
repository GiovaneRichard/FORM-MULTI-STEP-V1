import './App.css';
import { AppRouter } from './AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <div className="App">
      <AppRouter />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
