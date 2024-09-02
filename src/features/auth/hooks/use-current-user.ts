import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"


export const userCurrentuser = () => {
    const data = useQuery(api.users.current)
}