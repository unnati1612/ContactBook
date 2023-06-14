import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
    <ToastContainer />
      <h1 className='text-center text-decoration-underline mb-5 mt-3'>Contact Application</h1>
      <ContactList />
    </div>
  );
}

export default App;
