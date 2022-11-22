// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | string[] | undefined>
) {
    const code = req?.query.code
    const error = req?.query.error
    let authTokenJSON;

    if(error) {
        res.status(400).send(error)
    } else
    if(code){
        await axios.post('https://www.linkedin.com/oauth/v2/accessToken',
        "grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:3000/api/linkedin/callback&scope=r_emailaddress&client_id=" + process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID + "&client_secret=" + process.env.LINKEDIN_CLIENT_SECRET
        ).then ( (response) => { 
            authTokenJSON = response
        }).catch((error) => {console.log(error)})

        console.log(authTokenJSON)
        
        res.redirect("http://localhost:3000/")
    } else {
        res.status(400).send("Bad Request")
    }
  
}
