// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import fs from "fs"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const post = req?.query.post
  const userEmailAddress = req?.query.userEmailAddress
  const IDLinkedIn = req?.query.IDLinkedIn

  if(post && userEmailAddress && IDLinkedIn) {
    // read LinkedIn api token for user 
    const tokensDBString = fs.readFileSync('auth.tokens.JSON', 'utf-8')
    let tokensDBJSON = JSON.parse(tokensDBString)
    let accessToken = tokensDBJSON[userEmailAddress.toString()]
    
    // define post object
    let HTTPPostData = {
        "author": "urn:li:person:" + IDLinkedIn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": post
                },
                "shareMediaCategory": "NONE"
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }

    
    await axios.post("https://api.linkedin.com/v2/ugcPosts", HTTPPostData ,{
            headers: {
                "Authorization": "Bearer " + accessToken.access_token
            }
        })
        .then((response) => { 
            res.status(200).json({})
            return
        })
        .catch((error) => {
            console.log(error)
        })

    res.status(200).json({})
    return

  } else {
    res.json({'error' : 'No post parameter'})
    return
  }
}
