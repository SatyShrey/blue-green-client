import { useEffect, } from "react";
import { useValues } from "./GlobalContexts";
import { useState } from "react";

export default function Loader() {
 const { loading, } = useValues();
  const [display, setdisplay] = useState('none')

  useEffect(() => {
    if (loading) { setdisplay('flex') }
    else { setdisplay('none') }
  }, [loading])

  return (
    <div style={{display}} className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="p-2 bg-base-content text-base-100 text-center rounded">
        <p>Fetching pricing data</p>
        <div className=" loading loading-bars"></div>
      </div>
    </div>
  )
}
