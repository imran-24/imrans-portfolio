import { groq } from "next-sanity"
import { NextResponse } from "next/server"
import { client } from "../../../utils/client";
import { Social } from "@/typings";


const query = groq`
  *[_type == 'social']
`

export async function GET(request: Request) {
  try{
    const socials: Social[]  = await client.fetch(query)
  return NextResponse.json({socials: socials})
  }catch(e){
    return NextResponse.error();
  }
}
