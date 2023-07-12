export const options = [
    {
        heading: "Work Experience & Skills",
        desc:"Highlight your Education i the eye of recruiters..."
    },
    {
        heading: "Qualifications",
        desc: "Highlight your Education in the eye of recruiters...",
    },
    {
        heading: "Highlights, Sports...",
        desc: "Show your Highlights & Sports etc to recruiting te...",
    },
    {
        heading: "Recommendations",
        desc: "Provide Recommendations, get Recommendation...",
    },
    {
        heading: "Upload Video Resume",
        desc: "Now share your details in video form to Employer...",
    },
    {
        heading: "Are you Still Looking for Job/Internship",
        desc: "Update your Status for better reach...",
    },
    {
        heading: "Download Resume",
        desc: "All data will be combined in a format, you can dow...",
    }
]

export interface optionType{
    heading:string,
    desc: string
}


export const JobTitle = [
    {
        id: 0,
        title: "UI/UX Designer",
        selected:true,
    },
    {
        id: 1,
        title:"Product Manager",
        selected:false,
    },
    {
        id: 3,
        title:"Sales Executive ",
        selected:false,
    },
    {
        id: 4,
        title:"Human Resources Manager",
        selected:true,
    },
    {
        id: 5,
        title:"Java Developer",
        selected:false,
    }

]

export interface JobTitleType{
    id: number,
    title: string,
    selected: boolean,
}

export const Preference = [
    {
        id: 0,
        name:"UI/UX Designer",
    },
    {
        id: 1,
        name:"Senior Java Developer",
    },
    {
        id: 2,
        name:"IOS Developer",
    },
    {
        id: 3,
        name:"Graphic Designer",
    },
    {
        id: 4,
        name:"Lawyer",
    },
]

export interface PreferenceType{
    id: number,
    name: string
}

export const StoredDocument = [
    {
        id: 0,
        heading: "Reliving Letter (Previous Company)",
        placeholder: "combined_File.pdf",
        note:"Note: PDF file only | 2-5 MB file size maximum",
    },
    {
        id: 1,
        heading: "Resignation Letter (Previous Company)",
        placeholder: "combined_File.pdf",
        note:"Note: PDF file only | 2-5 MB file size maximum",
    },
    {
        id: 2,
        heading: "Upload Driving License",
        placeholder: "Driving_License.pdf",
        note:"Note: PDF file only | 2-5 MB file size maximum",
    },
]

export interface StoredDocumentType{
    id: number
    heading: string,
    placeholder: string,
    note: string
}

export const HiringProcessData = [
    {
        id: 1,
        heading: "Job Posting & Application Phase",
        desc:"Every Employer Post a Job from there side, after all verification the Job will be Active on Recruitr which will be visible to Applicants just within few minutes."
    },
    {
        id: 2,
        heading: "Shortlisting Phase for Employers",
        desc:"After receiving Applications within a Month Employer will short-list all Applicants according to there needs and Move them to next Phase of Assessment."
    },
    {
        id: 3,
        heading: "Assessment Phase",
        desc:"After Shortlist/Screen in Employer will send Assessment to all the Candidates with 1-2 Days of Screen in, Assessment will be submit from Employer on first Phase itself for easy process.",
    },
    {
        id: 4,
        heading: "Interview Phase",
        desc:"After Shortlisting the Assessment candidates will be Moved to Interview Phase & Interview will be Conducted within 4-5 Days.Note: Interviews can be more than one.",
    },
]

export interface HiringProcessDataType{
    id: number,
    heading: string,
    desc: string
}