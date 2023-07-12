import { FC,useState } from 'react'
import "./ProfileContent.css"
import LeftSide from '../LeftSide/LeftSide'
import { RightSideForm } from '../RightSideForm/RightSideForm';

import RightSideCv from '../RightSideCv/RightSideCv';

const ProfileContent: FC = () => {

  const [trackPage, setTrackPage] = useState<number>(0)

  return (
      <div className='ProfileContent'>
          <h2>Profile</h2>
      <div className="content">
        
        <LeftSide setTrackPage={setTrackPage} trackPage={trackPage}/>
        {
          trackPage==0?<RightSideForm />:trackPage==6?<RightSideCv />:"No page present here"
        }
         
        
        
          </div>
          
    </div>
  )
}

export default ProfileContent