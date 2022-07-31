// hooks
import { useState } from "react"

// components
import Main from "./components/MainWraper"
import UserInfo from "./components/UserInfo"

// style
import { Layout, Link } from "./assets/HomeView.style"
import { GlobalStyle } from "./assets/GlobalStyle" 

// icons
import { DiGithubBadge } from "react-icons/di"

export default function App() {
    const [user, setUser] = useState('')

    return (
        <>
            <GlobalStyle/>
            <Link href="https://github.com/1canas"><DiGithubBadge /></Link>
            <Layout>
                <Main setUser={setUser}/>
                {user && <UserInfo user={user}/>}
            </Layout>
        </>
    )
}