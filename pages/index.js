import Head from 'next/head'
import Image from 'next/image'
// import {PrismaClient} from '@prisma/client'
import layout from './layout/layout'


export default function Home({categorias}) {
  console.log(categorias)
  return (
    <layout >
      <h1>Next.js + Tailwind CSS</h1>
       
      
    </layout>
  )
}


//1 manera 
// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categorias = await prisma.categoria.findMany();
//   // console.log(categorias)
//   return {
//     props: {
//       categorias
//     }
//   }
// }
