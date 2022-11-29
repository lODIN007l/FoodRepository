import React from 'react'
import Image from 'next/image';

const Categoria = ({categoria}) => {

    const {nombre,icono,id}=categoria;
  return (
    <div>
        <Image
            width={100}
            height={100}
            src={`/assets/img/icono_${icono}.svg`}
            alt="imagen de loog "
            className='mr-5 '

        />
        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria