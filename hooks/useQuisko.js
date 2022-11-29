import { useContext,useEffect,useState } from "react";
import QuiskoContext from "../context/QuiskoContext";

const QuiskoContext= createContext();

const QuiskoProvider = ({children}) => {
    return (
        <QuiskoContext.Provider value={{}}>
            {children} </QuiskoContext.Provider>
    )
}
