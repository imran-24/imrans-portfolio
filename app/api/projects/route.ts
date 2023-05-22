import { groq } from "next-sanity"
import { NextResponse } from "next/server"
import { client } from "../../../utils/client";
import { Project } from "@/typings";


const query = groq`
  *[_type == 'project']{
    ...,
    technologies[]->
  }
`

export async function GET(request: Request) {

  const projects: Project[]  = await client.fetch(query)
  return NextResponse.json({projects: projects})

}
