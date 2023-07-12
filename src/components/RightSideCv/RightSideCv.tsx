import { FC,useState } from 'react'
import "./RightSideCv.css"
import CvImage from "../../assets/demoCv.jpg";


const RightSideCv: FC = () => {

    const [trackSelection, setTrackSelection] = useState<number>(0)

  return (
      <div className='Container'>
          <div className="top">
          <span className='Heading'>Select Format you want</span>
          <div className='CvContainer'>
              <section className='CvWrapper'>
                  <img className='CvPic' src={CvImage} alt="CV" />
                  <div className={trackSelection===1?"RadioOuterSelect":"RadioOuter"}>
                      <span className={trackSelection == 1 ? "RadioInnerSelect" : "RadioInner"} onClick={()=>setTrackSelection(1)}></span>
                  </div>
                  
              </section>

              <section className='CvWrapper'>
                  <img className="CvPic" src={CvImage} alt="CV" />
                  <div className={trackSelection===2?"RadioOuterSelect":"RadioOuter"}>
                      <span className={trackSelection == 2 ? "RadioInnerSelect" : "RadioInner"} onClick={() => setTrackSelection(2)}></span>
                  </div>
              </section>
              </div>
            </div>
          <div className='bottom'>
              <div className='myBtn'>Download</div>
              <span className="note">Note: for better & best Resume fill your all details in Resume Builder.</span>
          </div>
    </div>
  )
}

export default RightSideCv