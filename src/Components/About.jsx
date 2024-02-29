import React from 'react';
import '../App.css';
import './About.css'
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const About = () => {
  return (
    <div className='main-cont'>
      <div className='flex-div'>
      <div className='size-cont'>
          <h2> 🚀 About ACM RSCOE</h2>
          <p>Welcome to the ACM (Association for Computing Machinery) RS College of Engineering (RSCOE) club! We are a passionate community of students dedicated to fostering interest in computer science, promoting technical skills development, and encouraging collaboration among peers.</p>
        </div>
        <div className='size-cont'>
          <h2> 🚀 Our mission</h2> 
          <p>At ACM RSCOE, our mission is to provide a platform for students to explore their interests in computing, enhance their skills through practical experiences, and contribute to the larger tech community through open source initiatives.</p>
        </div>
      </div>
       <div className='flex-div'>
       <div className='size-cont'>
          
          <h2>🎬 Our Activites</h2>
          <p>As part of our efforts to promote learning and collaboration, we organize various activities, including:
            <br /><br />
            <li>Technical workshops and seminars on emerging technologies</li>
            <li>Coding competitions and hackathons to challenge and inspire student</li>
            <li>Special interest groups (SIGs) focusing on specific areas of computer science</li>
            <li>Outreach programs to engage with local schools and communities</li>
            </p>

        </div>
        <div className='size-cont'>
        <h2>✌️ Topics Covered:</h2>
          <p>
            
         <li> ntroduction to version control and Git</li>
         <li> Understanding GitHub: Repositories, branches, pull requests, and more</li>
         <li> Benefits of open source software and contributing to projects</li>
         <li> Hands-on activities and demonstrations</li>
          </p>
          <br /> <br />
          </div> 
        </div>
        <div className='flex-div'>
        <div className='size-cont'>
<h2> 👍 Who should attend</h2>
<p>
This session is open to all students interested in learning about GitHub and open source development. Whether you're a beginner or have some experience with version control, you'll find valuable insights and opportunities to enhance your skills.</p>
</div>
        <div className='size-cont'>
          
          <h2> 🤗 About Session</h2>
          <p>
          Title: Introduction to GitHub and Open Source <br /> <br />
          Date: [Insert Date]<br /> <br />
          Time: [Insert Time]<br /> <br />
          Location: [Insert Location/Online Platform]<br /> <br />

          In this session, we will deep dive into the world of GitHub and open source software. Open source has become an integral part of the software development ecosystem, empowering developers to collaborate, innovate, and contribute to projects of all sizes. Whether you're new to GitHub or looking to expand your understanding of open source principles, this session is for you!
          </p>
        </div>
        
        </div>
        <div className='flex-div'>
        <div className='img-cont'>
        <div>

<img className='img-class' src="https://media.licdn.com/dms/image/D4D03AQH8eoa0xNhNog/profile-displayphoto-shrink_400_400/0/1706379383048?e=1714608000&v=beta&t=vCO1YwzGed0lqqN15yPnih1nw0JrkdQF7EwY0qhWPN4" alt="" />
</div>
        <div className='info'>
        <h3>Abhishek Bhonde</h3>
        <a href="https://twitter.com/bhonde_abhishek">      <FaTwitter className='icon1' size={30} /></a>
        <a href="https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/">      <FaLinkedin className='icon2' size={30} /></a>
        <a href="https://github.com/abhishekbhonde">      <FaGithub className='icon3' size={30} /></a>

        </div>
            
        </div>
        <div className='img-cont'>
        <div>

<img className='img-class' src="https://media.licdn.com/dms/image/D4D03AQH8eoa0xNhNog/profile-displayphoto-shrink_400_400/0/1706379383048?e=1714608000&v=beta&t=vCO1YwzGed0lqqN15yPnih1nw0JrkdQF7EwY0qhWPN4" alt="" />
</div>
        <div className='info'>
        <h3>Abhishek Bhonde</h3>
        <a href="https://twitter.com/bhonde_abhishek">      <FaTwitter className='icon1' size={30} /></a>
        <a href="https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/">      <FaLinkedin className='icon2' size={30} /></a>
        <a href="https://github.com/abhishekbhonde">      <FaGithub className='icon3' size={30} /></a>

        </div>
            
        </div>
       
        </div>
        
       
      </div>
        
       
  );
}

export default About;
