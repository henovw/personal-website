
import { Computer, CircleUser, ContactRound, ScrollText, Presentation } from 'lucide-react';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    const redirectProjects = () => {
        navigate("/projects")
    }
    const redirectAboutMe = () => {
        navigate("/aboutme")
    }

    return (
        <>
        <div>
        
        <div className="mainpage-main-div">
            {/* <div className="sundiv">
            <div className="ray"></div>
            <div className="sun"></div>
        </div>
         */}
        <div className="mainpage-title-div cloud">
            <h1 className="mainpage-title-text spline-sans-mono-700">Henry van Weelderen</h1>
        </div>
        <div className="mainpage-subtext-div">
            <h3 className="mainpage-title-subtext gabarito-600">Computer Science @ UBC</h3>
            <h3 className="mainpage-title-subtext gabarito-600">UBC Open Robotics</h3>
        </div>
            <h3 className="mainpage-headers gabarito-500">Pages</h3>
        <div className="mainpage-subtext-sitelinks-div">
            <button onClick={redirectProjects} className="mainpage-sitelinks-text spline-sans-mono-600">
            
            Projects
            <Presentation />
            </button>

            <button onClick={redirectAboutMe} className="mainpage-sitelinks-text spline-sans-mono-600">
            
            About me
            <ContactRound />
            </button>
        </div>
            <h3 className="mainpage-headers gabarito-500">Links</h3>
        <div className="mainpage-subtext-div">
            <a href="https://www.linkedin.com/in/henry-van-weelderen-5b8b97160/" target="_blank" className="mainpage-links-text spline-sans-mono-600">
            
            LinkedIn
            <CircleUser />
            </a>

            <a href="https://github.com/henovw" target="_blank" className="mainpage-links-text spline-sans-mono-600">
            
            GitHub
            <Computer />
            </a>
           
            <a href="/henryresume.docx" target="_blank" className="mainpage-links-text spline-sans-mono-600">
            
            Resume
            <ScrollText />
            </a>
            <div className="blankfiller"></div>
        </div>
        </div>
        </div>
        </>
    )
}

export default App
