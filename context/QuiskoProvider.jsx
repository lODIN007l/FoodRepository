import { useEffect,useState,createContext } from "react";
import axios from "axios";
const QuiskoContext = createContext();
 const QuiskoProvider = ({ children }) => {
   
   const [categorias,setCategorias]=useState([]);
   const obtenerCategorias= async ()=>{
      const {data}= await axios.get('http://localhost:3000/api/categorias');
      setCategorias(data);
   }
   useEffect(()=>{
      obtenerCategorias();
    },[])



  return <QuiskoContext.Provider value={{categorias}}>{children}</QuiskoContext.Provider>;

}

export default QuiskoContext;
export{QuiskoProvider}