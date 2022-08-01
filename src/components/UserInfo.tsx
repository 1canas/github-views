import React, { useEffect, useState } from "react"

// style
import { InfoWrapper, InfoContainer, Name, Avatar, List, Login, Bio } from "../assets/UserInfo.style"

// interface
import { IUsers } from "../interfaces/IUsers"

import getUserData from "../services/fetchService"

export default function UserInfo (props: { user: string }) {
    const [userData, setUserData] = useState<IUsers>()

    useEffect(() => {
        getUserData(props.user, setUserData)
    },[props.user])

    if (userData === undefined) return <span>"loading"</span>
    return (
        <InfoWrapper>
            <Avatar src={userData.avatar_url}/>
            <Name>{userData.name}</Name>
            <Login>{userData.login}</Login>
            <InfoContainer>
                <Bio>{userData.bio}</Bio>

                <List>
                    <div>
                        <li>Followers: {userData.followers}</li>
                        <li>Repositories: {userData.public_repos}</li>
                        <li>Total start earned: {userData.stargazers}</li>
                    </div>

                    <div>
                        <li>Total issues: {userData.issues}</li>
                        <li>Total commits: {userData.commits}</li>
                        <li>:)</li>
                    </div>
                </List>
            </InfoContainer>
        </InfoWrapper>
    )
}