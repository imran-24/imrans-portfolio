import { groq } from "next-sanity"
import { NextResponse } from "next/server"
import { client } from "../../../utils/client";


const query = groq`
  *[_type == 'experience']
`

export async function GET(request: Request) {
  
  // try{
  //   const experiences: Experience[]  = await client.fetch(query)
  //   return NextResponse.json({experiences: experiences})
  // }catch(e){
  //   return NextResponse.error();
  // }

}
