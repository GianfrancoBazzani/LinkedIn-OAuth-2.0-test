

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

type userProfile = {
    userEmailAddress: string,
    firstName: string,
    lastName: string,
    pofilePicture: string,
    tokenExpiration: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    // Query userProfilefd
    let userProfile : any

    await axios.get("https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))", {
        headers: {
            "Authorization": "Bearer " + accessToken.access_token
        }
    })
    .then((response) => {
        console.log(response.data.profilePicture['displayImage~'].elements[0].data)
    })
    .catch((error) => {
         console.log(error)
    })

    // build object to be passed to frontend
      
    const response: userProfile = {
        userEmailAddress: userEmailAddress,
        firstName: userProfile.localizedFirstName,
        lastName: userProfile.localizedLastName,
        pofilePicture: userProfile.profilePicture.displayImage,
        tokenExpiration: accessToken.expires_in
    }

    // fromat response JSON to Query string
    let formatedJSONFieldsArray = JSON.stringify(response).slice(1,-1).replaceAll("\"","").split(",").map((item) => item.replace(":","="))
    let formatedQueryString = formatedJSONFieldsArray[0]
    console.log(formatedJSONFieldsArray)
    for (let i = 1; i<formatedJSONFieldsArray.length; i++){
        console.log(formatedJSONFieldsArray[i])
        formatedQueryString = formatedQueryString.concat("&" + formatedJSONFieldsArray[i])
        
    } 

  

  //res.status(200).json({ name: 'John Doe' })
}
