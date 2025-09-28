import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/pricing', { withCredentials: true }).then((data) => {
      console.log(JSON.stringify(data.data));
      setPlans(data.data);
    }).catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      {plans ?
        <div className={`${plans.plan === 'Standard Green' ? "bg-green-400" : "bg-blue-400"} 
        h-screen flex items-center justify-center`}>
          <div className="p-3 text-center">
            <h1 className="text-2xl font-bold border-b">Plans</h1>
            <h2 className="font-bold mt-2">{plans.plan}</h2>
            <p>Price: {plans.price} {plans.currency}</p>
            <h2 className="font-bold mt-2">Features</h2>
            <ul>{plans.features.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
        </div> :
        <div className="text-orange-500 font-bold text-2xl flex justify-center items-center h-screen">
          No data fetched yet
        </div>
      }
    </>
  )
}
