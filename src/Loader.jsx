import { useEffect, useRef } from "react";
import { useValues } from "./GlobalContexts";

export default function Loader() {
 const { loading, } = useValues();
  const loaderRef = useRef();

  useEffect(() => {
    if (loading) { loaderRef.current.showModal() }
    else { loaderRef.current.close() }
  }, [loading])

  return (
    <dialog ref={loaderRef} className="modal">
      <div className="modal-box text-center">
        <p>Fetching pricing data</p>
        <div className=" loading loading-bars"></div>
      </div>
    </dialog>
  )
}
