import axios from 'axios'
import { SetStateAction } from 'react'

// api config
import api from '../config/api'

// interfaces
import { IUsers } from "../interfaces/IUsers"

export default async function getUserData (user: string, setUserData: SetStateAction<any>) {
    const baseEndpoint = `/users/${user}`

    const baseInfo = await api.get<IUsers>(baseEndpoint)
    const repoInfo = await api.get(`${baseEndpoint}/repos`)

    var stargazers = 0, issues = 0, commits = 0
    for (const repo of repoInfo.data) {
        stargazers = stargazers + repo.stargazers_count
        issues = issues + repo.open_issues

        const commitsURL = repo.commits_url.split('{')
        commitsURL.pop()
        const commitList = await axios.get(commitsURL[0])
        commits = commits + commitList.data.length
    }

    setUserData({...baseInfo.data, stargazers, issues, commits})
}