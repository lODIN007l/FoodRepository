import { useContext } from "react";
import QuiskoContext from "../context/QuiskoProvider";

const useQuisko=()=>{
    return useContext(QuiskoContext);

};

export default useQuisko;