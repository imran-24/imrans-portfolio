import { groq } from "next-sanity"
import { NextResponse } from "next/server"
import { client } from "../../../utils/client";
import { PageInfo } from "@/typings";


const query = groq`
  *[_type == 'pageInfo'][0]
`

export async function GET(request: Request) {

  const pageInfo: PageInfo = await client.fetch(query)
  return NextResponse.json({pageInfo: pageInfo})

}
