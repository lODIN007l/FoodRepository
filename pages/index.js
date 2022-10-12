import Head from 'next/head'
import Image from 'next/image'
import {PrismaClient} from '@prisma/client'

export default function Home({categorias}) {
  console.log(categorias)
  return (
    <div >
      <h1>Next.js + Tailwind CSS</h1>
       
      
    </div>
  )
}


//1 manera 
export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany();
  // console.log(categorias)
  return {
    props: {
      categorias
    }
  }
}
