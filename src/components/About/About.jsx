import React from "react";
import './About.css'
const About = () => {
    return (
        <div className = 'about' id = 'about'>
            <div className = 'about_title'>
                <h2>about me</h2>
            </div>

            <div className = 'about_text'>
                <p>hi! i'm colin, a rising junior at uc berkeley double majoring 
                    in computer science and political science. my current interests
                    include low-level development, ai/ml, cs education,
                    and digital marketing. 
                    when i'm not coding or reading, you'll find me
                    running, swimming, biking, or lurking on letterboxd.</p>
                    <br></br>
                <p>i'm passionate about technology's role in shaping our 
                    polity and economy as it advances, and ensuring that it 
                    is beneficial—rather than detrimental—to our systems.
                    i'm driven to bring about a future where technological innovation 
                    uplifts society and promotes equitable progress.
                    if you share this vision, let's <a href = "https://www.linkedin.com/in/colinptran">connect</a>!</p>
            </div>
        </div>
    )
}

export default About