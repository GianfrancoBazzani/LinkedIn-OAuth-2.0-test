// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import fs from "fs"
import { isTemplateExpression } from 'typescript'

type accessToken = {
    access_token: string,
    expires_in: number,
    timestamp: number,
    scope: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string | string[] | undefined>
) {
    const code = req?.query.code
    const error = req?.query.error

    if (error) {
        res.status(400).send(error)
    } else
        // if call contains code parameter 
        if (code) {
            // request  Access Token.
            let accessToken: accessToken = { access_token: "", expires_in: 0, timestamp: 0, scope: "" }

            await axios.post("https://www.linkedin.com/oauth/v2/accessToken",
                "grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:3000/api/linkedin/callback&scope=r_emailaddress%20r_liteprofile&client_id=" + process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID + "&client_secret=" + process.env.LINKEDIN_CLIENT_SECRET)
                .then((response) => {
                    accessToken = response.data
                    accessToken.timestamp = Date.now()
                })
                .catch((error) => {
                    console.log(error)
                })
                     
            // Query userEmailAddress.
            let userEmailAddress = ""

            await axios.get("https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))", {
                headers: {
                    "Authorization": "Bearer " + accessToken.access_token
                }
            })
            .then((response) => {
                userEmailAddress = response.data.elements[0]['handle~'].emailAddress
            })
            .catch((error) => {
                 console.log(error)
            })

            // Store token in auth.token.JSON. indexed by userEmailAddress

            const tokensDBString = fs.readFileSync('auth.tokens.JSON', 'utf-8')
            let tokensDBJSON = JSON.parse(tokensDBString)
            tokensDBJSON[userEmailAddress] = accessToken
            fs.writeFileSync('auth.tokens.JSON', JSON.stringify(tokensDBJSON))

            // redirect to app mainpage with the respective json
            res.redirect("http://localhost:3000/?userEmailAddress=" + userEmailAddress)

        } else {
            res.status(400).send("Bad Request")
        }

}
