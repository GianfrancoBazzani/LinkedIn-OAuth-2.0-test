

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import fs from "fs"

type userProfile = {
    userEmailAddress: string,
    firstName: string,
    lastName: string,
    profilePicture: string,
    tokenExpiration: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<userProfile | undefined | string | any>
) {
    const userEmailAddress = req?.query.userEmailAddress

    
    if(userEmailAddress){
        // read LinkedIn api token for user 
        const tokensDBString = fs.readFileSync('auth.tokens.JSON', 'utf-8')
        let tokensDBJSON = JSON.parse(tokensDBString)
        let accessToken = tokensDBJSON[userEmailAddress.toString()]

        if(!accessToken){
            res.status(400).send("Bad Request, user do not has token")
            return
        }
        
       
       if(Date.now() > (accessToken.timestamp + accessToken.expires_in)){
            res.status(400).json({'error' : 'Token expired'})
            return
        }

        // query userProfile from LinkedIn
        let userProfile : undefined | userProfile

        await axios.get("https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))", {
            headers: {
                "Authorization": "Bearer " + accessToken.access_token
            }
        })
        .then((response) => {            
            userProfile = {
                userEmailAddress: userEmailAddress.toString(),
                firstName: response.data.localizedFirstName,
                lastName: response.data.localizedLastName,
                profilePicture: response.data.profilePicture,
                tokenExpiration: accessToken.timestamp + accessToken.expires_in - Date.now()
            }
            
        })
        .catch((error) => {
            console.log(error)
        })
    
        // return user profile json
        res.status(200).json(userProfile)
        return
    }

    res.status(400).send("Bad Request, no user address")
}
