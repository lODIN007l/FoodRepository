// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//2 manera 
import { PrismaClient } from '@prisma/client'



export default async function handler(req, res) {
  const prisma= new PrismaClient()
  const categorias= await prisma.categoria.findMany()
  res.status(200).json(categorias)
}
