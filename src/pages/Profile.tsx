import { FC } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProfileContent from "../components/ProfileContent/ProfileContent"
const Profile:FC = () => {
  return (
    <>
      <Header />
      <ProfileContent/>
      <Footer/>
    </>
  )
}

export default Profile