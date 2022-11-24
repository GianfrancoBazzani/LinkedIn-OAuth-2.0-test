import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const fetch = require('sync-fetch')
import { useRouter } from "next/router";

export default function Home() {

  const { query } = useRouter();

  let userProfile
  // Query user profile if 
  if(query.userEmailAddress){

    userProfile = fetch("/api/userprofile/?userEmailAddress=" + query.userEmailAddress).json()
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>LinkedIn OAuth 2.0 test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>MyLogo</div>
        <div className={styles.loginButton}>
          {(!query.userEmailAddress)?
          <Link href={"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID + "&redirect_uri=http://localhost:3000/api/linkedin/callback&scope=r_emailaddress%20r_liteprofile"} legacyBehavior>
            Login with LinkedIn  
          </Link>
          :
          <div>
            {userProfile.firstName}
          </div>
        }</div>
      </header>
      <main className={styles.main}>
      
        <h1 className={styles.title}>
          LinkedIn OAuth 2.0 test
        </h1>

        {!query.userEmailAddress?
          <h2 className={styles.subtitle}>
            Log in with LinkedIn please
          </h2>
          :
          <div>
            {userProfile.error?
            <h1>Error : {userProfile.error}</h1>
            :
            <div className={styles.userCard}>
              <Image className={styles.userCardImage} src={userProfile.profilePicture["displayImage~"].elements[2].identifiers[0].identifier} alt="profile image" width="400" height="400"></Image>
              <div className={styles.userCardInfo}>
                <p>First Name: {userProfile.firstName}</p>
                <p>Last Name: {userProfile.lastName}</p>
                <p>Email Address: {userProfile.userEmailAddress}</p>
                <p>OAuth2.0 Token expiration(s): {userProfile.tokenExpiration/1000}</p>
              </div>
            </div>
            }
            <div>
              {/*TODO POST TEXTBOX AND  API ENDPOINT TO POST MSG*/}
              
            </div>
          </div>
        }

    
      </main>
      <footer className={styles.footer}>
        <p>Gianfranco Bazzani UOC Ciberseguretat i Privadesa FonCib PRAC1</p>
      </footer>
    </div>
  )
}