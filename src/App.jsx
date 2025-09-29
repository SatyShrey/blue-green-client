import Header from "./Header";
import Loader from "./Loader";
import PriceData from "./PriceData";
import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
   <div className="app">
    <Header/>
    <PriceData/>
    <ToastContainer/>
    <Loader/>
   </div>
  )
}
