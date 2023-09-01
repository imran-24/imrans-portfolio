import { groq } from "next-sanity"
import { NextResponse } from "next/server"
import { client } from "../../../utils/client";
import { Skill } from "@/typings";


const query = groq`
  *[_type == 'skill']
`

export async function GET(request: Request) {
  
  try{
    const skills: Skill[]  = await client.fetch(query)
    return NextResponse.json({skills: skills})
  }catch(e){
    return NextResponse.error();
  }

}
