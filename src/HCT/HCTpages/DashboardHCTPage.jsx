import React, { useEffect, useState } from 'react'
import DashboardComp from '../HCT components/HCTDashboardComp/DashboardComp'
import { useNavigate } from 'react-router-dom'
import client from '../../API/api'

const DashboardHCTPage = () => {
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()

    const access = window.localStorage.getItem("access")
    const refresh = window.localStorage.getItem("refresh")

    useEffect(() => {
        if (!access) {
            setAuth(false)
            window.localStorage.clear()
            navigate("/login")
            return
        }

        client.get("all_users_status/", {
            headers: {
                Authorization: `Bearer ${access}`
            }
        }).then((resp) => {
            setAuth(true) // Valid access token
        }).catch((err) => {
            // If token is invalid, try to refresh
            if (err.response?.data?.code === 'token_not_valid') {
                tokenHandler()
            } else {
                console.error(err)
                setAuth(false)
                window.localStorage.clear()
                navigate("/login")
            }
        })
    }, [])

    const tokenHandler = () => {
        if (refresh) {
            client.post('api/token/refresh/', { refresh })
                .then((resp) => {
                    window.localStorage.setItem('access', resp.data.access)
                    window.localStorage.setItem('refresh', resp.data.refresh)
                    setAuth(true)
                    // // Optionally reload the page or refetch protected data
                    // window.location.reload()
                })
                .catch((err) => {
                    console.error("Refresh token invalid:", err)
                    setAuth(false)
                    navigate("/login")
                })
        } else {
            setAuth(false)
            navigate("/login")
        }
    }

    return (
        <div>
            {auth && <DashboardComp />}
        </div>
    )
}

export default DashboardHCTPage
