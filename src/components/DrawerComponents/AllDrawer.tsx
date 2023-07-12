import { FC, useState, useRef } from 'react'
import "./AllDrawer.css"
import { RxCross1 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { JobTitle, JobTitleType, Preference, PreferenceType, StoredDocument, StoredDocumentType, HiringProcessData, HiringProcessDataType } from '../../Data';
import { NormalUser } from '../../assets/DropDownIcon';
import GoldUser from "../../assets/GoldUser.png";
import { RedditIcon, InstagramIcon, FacebookIcon, WhatsappIcon, SlackIcon } from "../../assets/Icons";
import ProcessImg from "../../assets/Process.png";

interface propType{
  setTrackDrawer:React.Dispatch<React.SetStateAction<number>>
}


export const YourJobDrawer: FC<propType> = ({setTrackDrawer}) => {
  const [preferenceList, setPreferenceList] = useState<PreferenceType[]>(Preference)
  const [jobTitleList, setJobTitleList] = useState<JobTitleType[]>(JobTitle);



  const DeletePreference = (id: number) => {
    setPreferenceList(preferenceList.filter((preference: PreferenceType) => preference.id !== id))
  }

  const ChangeSelection = (id: number) => {
    setJobTitleList(jobTitleList.map((job: JobTitleType) => {
      if (job.id === id) {
        job.selected = !job.selected
      }
      return job
    }))
  }


  return (
    <div className="container">
      <div>
        <div className="heading">
          <span className='heading__text'>
            Your Job Preference
          </span>
          <RxCross1 className="heading__cross" onClick={()=>setTrackDrawer(0)}/>
        </div>
        <div className="drawer__search">
          <input type="text" placeholder="Search Job titles..." name="search" /><BiSearch />
        </div>
        <div className='job__title' >

          <p className="job__header" >
            Popular Jobs Titles
          </p>

          {jobTitleList.map((job: JobTitleType, index: number) => {
            return (
              <section key={index} className={job.selected ? "selected__job" : "unSelected__job"}>
                <div className={job.selected ? "selected_check__box" : "unSelected_check__box"} onClick={() => ChangeSelection(job.id)}>
                  {job.selected ? <AiOutlineCheck style={{ color: "#ffffff" }} /> : null}
                </div>
                <span>{job.title}</span>
              </section>
            )
          })}
        </div>

        <div className="preferences">
          <p className="preference__header">
            Your Preferences
          </p>
          <div className="preference__data">
            {preferenceList.map((preference: PreferenceType, index: number) => {
              return (
                <div key={index} className="preference">
                  <span >{preference.name}</span>
                  <RxCross1 style={{ cursor: "pointer" }} onClick={() => (DeletePreference(preference.id))} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// *************************************************************************
//**************************************************************************


export const UpdateDocuments: FC<propType> = ({setTrackDrawer}) => {
  const [storeDocumentList, setStoreDocumentList] = useState<StoredDocumentType[]>(StoredDocument);

  const fileRef = useRef<HTMLInputElement>(null);

  const DeleteFile = (id: number) => {
    setStoreDocumentList(storeDocumentList.filter((document: StoredDocumentType) => document.id !== id))
  }


  const OpenImageDialog = () => {

    fileRef.current?.click();
  }


  return (
    <div className='container'>
      <div>
        <div className="heading">
          <span className='heading__text'>
            Update Documents
          </span>
          <RxCross1 className="heading__cross" onClick={()=>setTrackDrawer(0)} />
        </div>

        <div>
          <p className="upload__header" >Documents Details</p>
          <span className='upload__details'>Upload These Necessary Documents, Company will ask to Upload During Document verification Process.</span>
        </div>

        <div className='upload__wrapper'>
          <div >
            <p className='file__upload__header'>Upload Pan Card</p>
            <div className='upload__file'>
              <span>Upload only jpg/Pdf/jpeg...</span>
              <BsUpload style={{ cursor: "pointer" }} onClick={OpenImageDialog} />
            </div>
            <span className="upload__note" >Note: PDF file only | 2-5 MB file size maximum</span>
          </div>

          <div >
            <p className='file__upload__header'>Upload Blank Cheque</p>
            <div className='upload__file'>
              <span>Upload only jpg/Pdf/jpeg...</span>
              <BsUpload style={{ cursor: "pointer" }} onClick={OpenImageDialog} />
            </div>
            <span className="upload__note" >Note: PDF file only | 2-5 MB file size maximum</span>
          </div>

        </div>

        <div className="content__wrapper">
          {
            storeDocumentList.map((storeDocument: StoredDocumentType) => {
              return (
                <div key={storeDocument.id}>
                  <p className="file__upload__header">{storeDocument.heading}</p>
                  <div className='upload__file'>
                    <span>{storeDocument.placeholder}</span>
                    <HiOutlineTrash className="delete__file" onClick={() => DeleteFile(storeDocument.id)} /></div>
                  <span className="upload__note" >{storeDocument.note}</span>
                </div>
              )
            })
          }
        </div>
        <span className="instruction">Note: Contact Customer Support to Upload other documents.</span>
      </div>
      <div style={{ display: "none" }}>
        <input type="file" name="myImg" ref={fileRef} />
      </div>
    </div>
  )
}



//**************************************************************************
//**************************************************************************

export const SubscriptionDrawer: FC<propType> = ({setTrackDrawer}) => {

  const [option, setOption] = useState<number>(2)

  return (
    <div className='container'>
      <div style={{ display: "flex", flexDirection: "column", padding: "3%", height: "93%", justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: "13px" }}>
          <div className="heading">
            <span className='heading__text'>
              Subscription Details
            </span>
            <RxCross1 className="heading__cross" onClick={()=>setTrackDrawer(0)}/>
          </div>

          <div className="outer__option__rapper">
            <p className='subscription__header'>
              Existing Plan
            </p>
            <div className="option__wrapper1">
              <section className="wrapper__left">
                <span className="option__heading">Recruitr Fresher Candidate</span>
                <span className="note">Purchased on: 27th Mar 2023</span>
                <span className='note'>Valid Till: 27th Jun 2023</span>
              </section>
              <section className="wrapper__right"> <NormalUser /></section>
            </div>
          </div>

          <div className='outer__option__rapper'>
            <p className='subscription__header'>
              Upgrade Your Plan to
            </p>
            <div className="option__wrapper2">
              <div className="subscription__wrapper__inner">
                <div>
                  <div className={option === 1 ? "RadioOuterSelect" : "RadioOuter"}>
                    <span className={option == 1 ? "RadioInnerSelect" : "RadioInner"} onClick={() => setOption(1)}></span>
                  </div>
                  <div className="subscription__wrapper__left">
                    <span className="option__heading">Recruitr Gold Candidate</span>
                    <section>
                      <span className="price"> ₹200 </span><s style={{ color: "var(--BodyText2)" }}>₹400</s><span className="offer">50% OFF</span>
                    </section>
                  </div>
                </div>
                <section className="subscription__wrapper__right"><img src={GoldUser} alt="" /></section>
              </div>
              <div className="gold__separator"></div>
              <div className='advice'>
                <span>Get a Chance to Apply Jobs which asking Experience</span>
                <span className='note text__center'>Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates.</span>
                <span className='note' style={{ margin: "auto" }}><MdOutlineKeyboardArrowUp /> View less</span>
              </div>
            </div>
          </div>

          <div className='outer__option__rapper'>
            <div className="option__wrapper3">
              <div>
                <div className="subscription__wrapper__inner">
                  <div>
                    <div className={option === 2 ? "RadioOuterSelect" : "RadioOuter"}>
                      <span className={option == 2 ? "RadioInnerSelect" : "RadioInner"} onClick={() => setOption(2)}></span>
                    </div>
                    <div className="subscription__wrapper__left">
                      <span className="option__heading">Recruitr Diamond Candidate</span>
                      <section>
                        <span className="price"> ₹400 </span><s style={{ color: "var(--BodyText2)" }}>₹800</s><span className="offer">50% OFF</span>
                      </section>
                    </div>
                  </div>
                  <section className="subscription__wrapper__right">
                    <img style={{ filter: "hue-rotate(185deg)" }} src={GoldUser} alt="" />
                  </section>
                </div>
              </div>
              <div className='advice'>
                <span className='note' style={{ margin: "auto" }}><MdOutlineKeyboardArrowDown /> View more</span>
              </div>
            </div>
          </div>
        </div>

        <div className='upgrade__subscription'>  Upgrade Subscription </div>
      </div>
    </div>
  )
}


//**************************************************************************
//**************************************************************************

export const ReferFriend: FC<propType> = ({setTrackDrawer}) => {
  return (
    <div className='container'>
      <div style={{ gap: "50px" }}>
        <div className="heading">
          <span className='heading__text'>
            Refer to your Friends
          </span>
          <RxCross1 className="heading__cross" onClick={()=>setTrackDrawer(0)}/>
        </div>

        <div className="message__wrapper">
          <div className="message">
            Hey! It's been a game-changer for me in finding job opportunities and connecting with employers. Join now to level up our careers together! Get it from: https://recruitr.com/invite link example - Sender name
          </div>
          <section className="copy__to__clipboard">
            <MdOutlineContentCopy style={{ transform: "rotate(180deg)", cursor: "pointer" }} />
            <span>Copy</span>
          </section>
        </div>

        <div className="icon__container">
          <section>
            <div><RedditIcon /></div>
            <span>Reddit</span>
          </section>

          <section>
            <div><InstagramIcon /></div>
            <span>Instagram</span>
          </section>

          <section>
            <div><FacebookIcon /></div>
            <span>Facebook</span>
          </section>

          <section>
            <div><WhatsappIcon /></div>
            <span>Whatsapp</span>
          </section>

          <section>
            <div><SlackIcon /></div>
            <span>Slack</span>
          </section>

        </div>
      </div>
    </div>
  )
}


export const HiringProcess: FC<propType> = ({setTrackDrawer}) => {

  const HiringProcessList: HiringProcessDataType[] = HiringProcessData;

  return (
    <div className='container hiring__container' >
      <div style={{ padding: "0px" }}>
        <div className="heading" style={{ margin: "16px" }}>
          <span className='heading__text' >
            Hiring Process in Details
          </span>
          <RxCross1 className="heading__cross" onClick={()=>setTrackDrawer(0)}/>
        </div>

        <img src={ProcessImg} alt="" className='process__img' />
        <div style={{ margin: "0px 16px" }}>
          <p className="hiring__process__title text__center">Get Job with our Simplest Hiring Process</p>
          <p className='note text__center'>We provide you a very user Friendly process so that no Employee & Employer waste to much time in Hiring Process, Our Simplest Process Will Work according to you.</p>
        </div>

        <div className="hiring__process__instructions">
          {
            HiringProcessList.map((rules) => {
              return (
                <section key={rules.id}>
                  <div className="verticalRule"></div>
                  <div className="badge">{ rules.id}</div>
                  <p>{rules.heading }</p>
                  <p className="note" >{rules.desc}</p>
                </section>
              )
            })
          }

        </div>
      </div>
    </div>


  )
}
