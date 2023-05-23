import {createClient} from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url';

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = createImageUrlBuilder(client)

export const urlFor = (source)=>{
  return builder.image(source)
}


// there was an error the error was because there is no module for typescript file
// you have to make it javascript file