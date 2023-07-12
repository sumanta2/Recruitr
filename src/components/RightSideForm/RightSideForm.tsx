
interface formDataType{
    jobTitle:string,
    companyName:string,
    employeeType:number,
    workStatus:number,
    location:string,
    ctc:string,
    startDate:string,
    endDate:string,
    desc:string
}

import { FC, useState,ChangeEvent } from 'react';
import "./RightSideForm.css";
import {MdOutlineCalendarMonth} from 'react-icons/md';

export const RightSideForm: FC = () => {

    const [formData, setFormData] = useState<formDataType>({jobTitle:"",companyName:"",employeeType:1,workStatus:1,location:"",ctc:"",startDate:"",endDate:"",desc:""});

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // console.log(e.target.name,e.target.value)
        setFormData((prevValue)=>({...prevValue, [e.target.name]: e.target.value}))
    }

    return (
        <div className='RightSideForm'>
            <p className="Heading">Add Experience</p>
            <div className='row'>
                <section className='col' >
                    <span>Job Title</span>
                    <input type="text" name="jobTitle" className='inputText' value={formData.jobTitle} onChange={(e)=> handleChange(e)} placeholder='Example: Product manager' />
                </section>
                <section className='col'>
                    <span>Company Name</span>
                    <input type="text" name="companyName" className='inputText' value={formData.companyName} onChange={(e)=> handleChange(e)} placeholder='Example: Google'/>
                </section>
            </div>

            <div className='row'>
                <section className='col'>

                    <span>Employee Type</span>
                    <select value={formData.employeeType} name="employeeType" onChange={(e)=> handleChange(e)}>
                        <option value={0}>Select an option</option>
                        <option key={1} value={1}>  Full Time  </option>
                    </select>
                </section>
                <section className='col'>
                    <span> Working Status</span> 
                    <select value={formData.workStatus} name="workStatus" onChange={(e) => handleChange(e)}>
                        <option value={0}>Select an option</option>
                        <option key={1} value={1} >  Working Status </option>
                    </select>
                </section>
            </div>

            <div className='row'>
                <section className='col'>
                    <span>Work Location</span>
                    <input type="text" name="location" placeholder='Example: London-Work from home' value={formData.location} onChange={(e)=> handleChange(e)} />
                </section>
                <section className='col'>
                    <span>Add C.T.C.</span>
                    <input type="text" name="ctc" placeholder='#only figure entry in salary' value={formData.ctc} onChange={(e)=> handleChange(e)} />
                </section>
            </div>

            <div className='row'>
                <section className='col'>
                    <span>Starting Date</span>
                    <div className="time">
                        <input type="text" name="startDate" placeholder='MM/YY' value={formData.startDate} onChange={(e)=> handleChange(e)} />
                        <MdOutlineCalendarMonth/>
                    </div>
                </section>
                <section className='col'>
                    <span style={{color: "var(--NotSelect)"}}>Ending Date</span>
                    <div className="time">
                        <input type="text" name="endDate" placeholder='MM/YY' value={formData.endDate} onChange={(e)=> handleChange(e)} />
                        <MdOutlineCalendarMonth style={{color: "var(--NotSelect)"}} />
                    </div>
                </section>
            </div>
            
            <div className="rowFull">
                <span>Starting Date</span>
                <input type="text" name="desc" style={{padding:"10px"}} placeholder='Description about you...' value={formData.desc } onChange={(e)=> handleChange(e)} />
            </div>
        </div>
    )
}
