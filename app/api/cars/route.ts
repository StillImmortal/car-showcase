import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const prisma = new PrismaClient()


export async function GET(req: NextRequest) {
  try {
    const res = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry", {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c9bae9ae0msh0e755eb54582bb4p118ea5jsnedaee5642d16',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    })
    const data = await res.json()

    //await redis.set("camry", JSON.stringify(data))

    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     await prisma.$connect()
//     const _page = Number(req.nextUrl.searchParams.get("_page"))
//     const _limit = 10
//     const posts = await prisma.post.findMany()
//     const startIndex = (_page - 1) * _limit
//     const postsForPage = posts.slice(startIndex, startIndex + _limit)
//     return NextResponse.json(postsForPage)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await prisma.$disconnect()
//   }
// }