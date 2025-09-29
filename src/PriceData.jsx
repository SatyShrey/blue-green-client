import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useValues } from "./GlobalContexts";
import { toast } from 'react-toastify';

export default function PriceData() {
    const { setLoading, url } = useValues()
    const [plans, setPlans] = useState(null);

    function getData() {
        setLoading(true)
        axios.get(url + '/pricing', { withCredentials: true }).then((data) => {
            console.log(JSON.stringify(data.data));
            setPlans(data.data);
        }).catch((err) => {
            console.error(err.message);
            toast.error(err.message);
        }).finally(() => setLoading(false))
    }

    //load data when page load
    useEffect(() => {
        getData();
    }, []);

    return plans ?
        <div className={`p-3 text-center w-fit m-auto rounded pt-0 mt-3 
        ${plans.plan==="Standard Green"?"bg-success":"bg-primary"}`}>
            <h1 className="text-2xl font-semibold underline underline-offset-4">Pricing Plans</h1>
            <h2 className="font-bold mt-2">{plans.plan}</h2>
            <p>Price: {plans.price} {plans.currency}</p>
            <h2 className="font-bold mt-2">Features</h2>
            <ul>{plans.features.map(f => <li key={f}>{f}</li>)}</ul>
            <button className="btn mt-3" onClick={getData}>Get new data</button>
        </div>

        : <div className="text-warning p-3 text-center">No data fetched yet</div>
}
