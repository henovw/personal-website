import "./App.css"
import "./Projects.css"
import "./AboutMe.css"

function AboutMe() {
    return (
        <div style={{marginBottom: "100px"}}>
            {/* <div className="sundiv">
                <div className="sun"/>
            </div> */}
            <div className="projects-main-div">
            <div className="mainpage-title-div cloud">
            <h1 className="mainpage-title-text spline-sans-mono-700">About me</h1>
            </div>

            <div className="aboutme-cloud-div">
                <div className="aboutme-images-div">
                <img className="aboutme-images" src="/image1.png"/>
                <img className="aboutme-images" src="/image2.png"/>
                </div>
                <span className="aboutme-description gabarito-500">
                    I'm a second year UBC Computer Science student passionate in programmming and development. 
                    Through multiple projects I have learned new programming languages while becoming proficient in others.
                    I have experience in languages such as Python, Java, JavaScript, TypeScript, Swift, and R while also being familiar
                    with libraries such as Node.js, Next.js, React, Django, and Selenium.
                    The project I'm currently focused on is my roommate finder app rumi, which I am developing in Swift.
                    Aside from programming I play basketball, give haircuts, and play video games.
                </span>



            </div>
            <div className="blankfiller">a</div>
            </div>
                
        </div>
    )
}

export default AboutMe