import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";


export default function LinkedinCallback() {
    const { query } = useRouter();
    
    // query.state code — The OAuth 2.0 authorization code.
    // query.code state — A value used to test for possible CSRF attacks.

    console.log(query.code);

    
    
    cookieCutter.set('LinkedinAuthToken', /*{ expires: new Date() }*/)
    
    
    return <div className={styles.description}>{query.code}</div>
}