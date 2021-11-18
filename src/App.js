import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import './App.css';

export default function App() {
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <ToastContainer />
    </div>
  );
}
