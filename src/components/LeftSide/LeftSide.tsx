interface propType{
  setTrackPage: React.Dispatch<React.SetStateAction<number>>,
  trackPage:number,
}

import { FC,ChangeEvent } from 'react'
import "./LeftSide.css"
import avatarImg from "../../assets/avatar.jpeg";
import { options, optionType } from '../../Data';
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { IoAddCircleOutline } from "react-icons/io5";

const optionsArray: optionType[] = options;

const LeftSide: FC<propType> = ({setTrackPage,trackPage}) => {

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
  };

  return (
    <div className='LeftSide'>
      <div className="Profile__details">
        <img className="Profile__picture" src={avatarImg} alt="Profile Image" />
        
        <span className='user__name'>Robin Singh</span>

        <span className='mobile__number'>+91 9876543210</span>

        <div className="Profile__skills">
            <span className="skill">UI/UX</span>
            <span className="skill">Full-Time</span>
            <span className="skill">Peaks</span>
            <span className="skill">Canteen</span>
        </div>
        <span className="Update"> Update Personal Details </span>
      </div>

      <div className="Horizontal__separator"></div>

      <div>
        <h2 className='Heading'>
          Build Resume With Recruitr
        </h2>
        <span className='Description'>
          Update these details for better chances of selection These Information Can be view by Hiring Teams.
        </span>
      </div>
      {
        optionsArray.map((option:optionType,index:number) => {
          return (
            <div key={index} onClick={()=>setTrackPage(index)}>
              <div className={trackPage===index?"Option__container__Select":"Option__container"} >
              <div>
                <div className="Option__left">
                    <p className={trackPage===index?"Option__title_select":"Option__title"}>{option.heading}</p>
                  <span className={trackPage===index?"Option__desc__select":"Option__desc"}>{option.desc}</span>
                </div>
                  {index !== 5 ? <IoAddCircleOutline className={trackPage===index?"rounded__plus__select":"rounded__plus"} /> : <Switch checked={checked} style={{width:'31px'}} onChange={handleChange} />}
                </div>
              </div>
              <div className="Horizontal__separator"></div>
            </div>  
          )
        })
      }
      </div>
  )
}

export default LeftSide