import { FC,useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { BiBriefcase } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import {RiUserLine} from "react-icons/ri";
import avatarImg from "../../assets/avatar.jpeg";
import { YourJobDrawer ,UpdateDocuments,SubscriptionDrawer, ReferFriend,HiringProcess} from "../DrawerComponents/AllDrawer";
import {PencilIcon,ChartPyramidIcon,AddUser} from "../../assets/DropDownIcon";
import "./Header.css"

const Header: FC = () => {

    const [manageDropdown, setManageDropdown] = useState<boolean>(false)
    const [trackDrawer, setTrackDrawer] = useState<number>(0)

    const handleClick = (i: number) => {
        setManageDropdown(false);
        setTrackDrawer(i);
    }
    

    return (
        <div className="header">
            <div className="header__title">
                <span className="Recruiter">Recruitr</span>
                <span className="text">Your gateway to Success!</span>
            </div>
            
            <div className="header__search">
                <input type="text" placeholder="Search Jobs..." name="search"/><BiSearch/>
            </div>

            <div className="header__dashboard">
                <RxDashboard />
                <span>Dashboard</span>
            </div>

            <div className="header__AppliedJob">
                <BiBriefcase />
                <span>Find Jobs</span>
            </div>

            <div className="header__FindJob">
                <BsCheck2Circle/>
                <span>Applied Jobs</span> 
            </div>

            <div className="separator"></div>
            <div><AiOutlineMessage size={20} /></div>
            <div className="ring"><HiOutlineBell size={20} />
                <div className="red__Dot"></div>
            </div>

            <div className="separator"></div>

            <div className="Dropdown" onClick={()=> setManageDropdown(!manageDropdown)}>
                <img className="Dropdown__avatar" height={27} src={avatarImg} alt="profile" />
                <span className="Dropdown__title">Robin</span>
                <span className={`Dropdown__Arrow ${manageDropdown?"RotateElement":""}`}></span>
            </div>

            { manageDropdown &&
                <div className="Drop__down__menu">
                    <section className="option" onClick={()=>handleClick(1)}><RiUserLine className="MyIcon" />Profile</section>
                    <section className="option" onClick={()=>handleClick(2)}><PencilIcon />Update Job Preference</section>
                    <section className="option" onClick={()=>handleClick(3)}><HiOutlineDocumentPlus className="MyIcon" /> Update Documents</section>
                    <section className="option" onClick={()=>handleClick(4)}><ChartPyramidIcon />Hiring Process Detail</section>
                    <section className="option" onClick={()=>handleClick(5)}><BsFillStarFill className="StarIcon" /> Subscription Details</section>
                    <section className="option" onClick={()=>handleClick(6)}><AddUser /> Refer to Friends</section>
                    <section className="Dropdown__separator"></section>
                    <section className="option" style={{ color: "var(--Error)" }}><FiLogOut className="LogOutIcon" />Log Out</section>

                </div>
            }

            {trackDrawer === 2 ? <YourJobDrawer setTrackDrawer={setTrackDrawer} /> :

                trackDrawer === 3 ? <UpdateDocuments setTrackDrawer={setTrackDrawer} /> :

                    trackDrawer === 4 ? <HiringProcess setTrackDrawer={setTrackDrawer} /> :

                        trackDrawer === 5 ? <SubscriptionDrawer setTrackDrawer={setTrackDrawer} /> :
                            
                            trackDrawer === 6 ? <ReferFriend setTrackDrawer={setTrackDrawer} /> : ""}


        </div>
    )
}

export default Header;


