import "./Projects.css"
import experienceData from "../public/experience.json"

type Experience = {
    employer: string;
    key: number;
    location: string;
    termlength?: string
    date: string;
    position: string;
    description: string;
    skills: string[]
}

function Experience() {
    const experience: Experience[] = experienceData.experience


    return (
        <div>
        <div className="projects-main-div">
            {/* <div className="sundiv">
        <div className="sun"/>
        </div> */}
            

            <div className="mainpage-title-div cloud">
            <h1 className="mainpage-title-text spline-sans-mono-700">Projects</h1>
            </div>
            {experience.map((experience) => (
                <div className={`projects-project-div ${experience.key === 0 ? "last-project" : ""}
                ${experience.key % 2 === 0 ? "project-one" : "project-two"} gap-10`} key={experience.key}>

                <div style={{"display": "flex", "justifyContent": "space-between", "gap": "5px"}}>
                    <h3 className="mainpage-title-text spline-sans-mono-500">{experience.employer}</h3>
                    <span className="spline-sans-mono-300">{experience.date}</span>
                </div>
                
                <span className="mainpage-title-text  spline-sans-mono-600">{experience.position}</span>

                <span className="project-description-text gabarito-300">{experience.description}</span>

                <div className="projects-tag-div">
                    {experience.skills.map(tag => (
                        <span className="projects-tag-text  gabarito-500"  style={{"fontSize": "17px"}} key={tag}>{tag}</span>
                    ))}
                </div>

                </div>
            ))}
            
            <div className="blankfiller">d</div>
        </div>
        </div>
    )
}

export default Experience