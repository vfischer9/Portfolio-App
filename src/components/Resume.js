import React from 'react'

function Resume() {

    console.log('resume loads');

    return (
        <div className='bordered' id='resumeComponent'>
            {/* <embed className='resumeEmbed' src="https://onedrive.live.com/embed?resid=BE35587733C974EE%2145362&amp;authkey=%21AD0PrIMP1Jm23Bw&amp;em=2&amp;wdEmbedCode=0"></embed> */}
            <h3 className='resumeName'>VICTORIA FISCHER</h3>
            <p className='resumeContact'>(917) 831-8913 || fischer.victoria17@gmail.com || Staten Island, NY ||  <a target='_blank' href="https://github.com/vfischer9">https://github.com/vfischer9</a> || <a target='_blank' href="https://www.linkedin.com/in/vfischer9/">https://www.linkedin.com/in/vfischer9/</a></p>
            
            <p className='resumeHead'><b><u>EDUCATION</u></b></p>
            <p className='resumeBullet'><b>City University of New York (CUNY), College of Staten Island</b> (August 2017- August 2021)</p>
            <p className='resumeDesc'>Computer Science (BS), associated with Verrazano Honors School, GPA: 3.5</p>
            <p className='resumeBullet'><b>Relevant Coursework</b></p>
            <p className='resumeDesc'>Advanced Computer Game Programming, Advanced Data Communications, Advanced Database Systems, Advanced Web Development, Analysis of Algorithms, Artificial Intelligence, Data Structures, Introduction to Healthcare (Stanford University), Object Oriented Programming, Software Engineering</p>
        
            <p className='resumeHead'><b><u>TECHNICAL SKILLS</u></b></p>
            <p className='resumeDesc'>Languages/Frameworks: C#, C++, JavaScript, Ember.js, React.js, Node.js, Express.js, Redux, GitBash, Git, PuTTY, MongoDB, PostgreSQL, SQL Server, Bootstrap, HTML</p>
            <p className='resumeDesc'>Technologies: Visual Studio Code, GitHub, Heroku, AWS, Cypress.io, pgAdmin, MongoDB Compass, Unity, iMovie, DaVinci Resolve</p>

            <p className='resumeHead'><b><u>PROFESSIONAL EXPERIENCE</u></b></p>
            <div>
                <div>
                    <span className='left'><b>Datanomy - <i>Vaccination Form</i></b></span> 
                    <span className='right'><b>New York, NY</b></span>
                    <div class="clear"></div>
                </div>
            </div>
            <div>
                <div>
                    <span className='left'><i>Software Engineer</i></span> 
                    <span className='right'><i>06/2021 - 08/2021</i></span>
                    <div class="clear"></div>
                </div>
            </div>
            <p className='resumeDesc'>Worked collaboratively to develop a registration form application that schedules users COVID-19 vaccination appointments.</p>
            <ul className='list'>
                <p className='resumeDesc'>-Rendered an interactive user interface by collecting contact, background, insurance, and screening information through a HIPPA compliant form</p>
                <p className='resumeDesc'>-Stored useful information using PostgreSQL as a database to track data as users complete the registration process, containing primary keys that are referenced by foreign keys of different tables</p>
                <p className='resumeDesc'>-Utilized React.js state management and class components to pass information to the other form routes</p>
                <p className='resumeDesc'>-Installed the Express.js framework to configure the server to listen to the client and the CORS framework to access the server</p>
                <p className='resumeDesc'>-Created API routes and proxies of tables to make GET requests to obtain information and POST requests to store information</p>
                <p className='resumeDesc'>-Implemented the EmailJS framework to send users alerts regarding their registration</p>
            </ul>

            <p className='resumeHead'><b><u>TECHNICAL PROJECTS</u></b></p>
            <div>
                <div>
                    <span className='left'><b>CUNY Undergraduate Research - <i>COVID-19 Virtual Test</i></b></span> 
                    <span className='right'><b>New York, NY</b></span>
                    <div class="clear"></div>
                </div>
            </div>
            <div>
                <div>
                    <span className='left'><i>Web Developer</i></span> 
                    <span className='right'><i>02/2021 - 04/2021</i></span>
                    <div class="clear"></div>
                </div>
            </div>
            <p className='resumeDesc'>Developed and later presented a virtual COVID-19 testing application to a conference that allows users to easily see their likelihood of having COVID-19 by answering a series of questions.</p>
            <ul className='list'>
                <p className='resumeDesc'>-Rendered an interactive user interface by displaying an array of questions one at a time along with two answer choices of “yes” and “no”</p>
                <p className='resumeDesc'>-Created a custom algorithm that calculates the user a score depending on their answer choice to each question, displaying the score upon test completion with an assigned category of low, moderate, or high risk</p>
                <p className='resumeDesc'>-Utilized React.js state management and functional components to manage the current question and score value</p>
                <p className='resumeDesc'>-Presented the application to a conference made up of mentors, various faculty members, and peers at the 2021 Virtual CUNY Undergraduate Research Conference</p>
            </ul>
            <div>
                <div>
                    <span className='left'><b>Tech Talent Pipeline - <i>Cinemafi</i></b></span> 
                    <span className='right'><b>New York, NY</b></span>
                    <div class="clear"></div>
                </div>
            </div>
            <div>
                <div>
                    <span className='left'><i>Full-Stack Developer</i></span> 
                    <span className='right'><i>01/2021 - 01/2021</i></span>
                    <div class="clear"></div>
                </div>
            </div>
            <p className='resumeDesc'>Worked on a team of peers to create an application that serves as an online database of movie information, containing data such as movie plot, cast, runtime, reviews, and posters. </p>
            <ul className='list'>
                <p className='resumeDesc'>-Fetched movie data from an API (The Movie Database) </p>
                <p className='resumeDesc'>-Implemented sign-up and sign-in functionalities to allow users to interact with movies by liking, favoriting, or commenting on them, as well as replying to and liking or disliking other comments </p>
                <p className='resumeDesc'>-Utilized token-based authentication for account creation and sign-in</p>
                <p className='resumeDesc'>-Stored useful information using MongoDB as a database to track data as users interact with movies and comments</p>
            </ul>

            <p className='resumeHead'><b><u>WORK EXPERIENCE</u></b></p>
            <p className='resumeBullet'><b>Software Engineer Intern (June 2021 - August 2021)</b></p>
            <p className='resumeBullet'>Datanomy - Remote</p>
            <p className='resumeBullet'><b>Waitress (March 2018 - June 2021</b></p>
            <p className='resumeBullet'>The RoadHouse - Staten Island, NY</p>

            <br></br>

        </div>
    )
}

export default Resume;
