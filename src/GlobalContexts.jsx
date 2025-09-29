import { createContext, useContext, useState } from "react";

const GlobalContexts = createContext();

export const GlobalProvider=({children})=>{
    const [loading, setLoading] = useState(false);
    const url= import.meta.env.VITE_API_URL || 'http://localhost:4000'

    return <GlobalContexts.Provider value={{loading, setLoading,url}}>
        {children}
    </GlobalContexts.Provider>
}

export const useValues=()=>useContext(GlobalContexts);
