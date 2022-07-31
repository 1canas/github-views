import { SetStateAction } from 'react'

// api config
import api from '../config/api'

// interfaces
import { IUsers } from "../interfaces/IUsers"

export default async function getUserData (user: string, setUserData: SetStateAction<any>) {
    await api.get<IUsers>(`/users/${user}`).then(response => setUserData(response.data))
} 