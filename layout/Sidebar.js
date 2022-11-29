import Image from "next/image"
import Categoria from "../components/Categoria";
import useQuisko from "../hooks/useQuisko";


const Sidebar = () => {
    const {categorias}= useQuisko();
  return (
    <>
        <Image  width={300} height={100}  src="/assets/img/logo.svg" alt="imagen de loog " /> 

        <nav className="mt-10 ">
              {categorias.map((categoria)=>(
              <Categoria 
                    key={categoria.id} 
                    categoria={categoria} 
              />))}
        </nav>

        


    </>
  )
}

export default Sidebar