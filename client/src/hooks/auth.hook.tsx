import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {login, storageKey} from "../redux/actions/fetchAuth"
import { RootState } from "../redux/reducers"

const useAuth = () => {
  const dispath = useDispatch()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageKey))
    
    if (data) {
      dispath(login(data))
    }
  }, [])

  return isAuth
}

export default useAuth