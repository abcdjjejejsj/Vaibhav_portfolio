// import logo from './logo.svg';
 import './App.css';
import React, { useState, useEffect } from 'react';
import vaibhavImage from './vaibhav.png';
import { FaBars, FaTimes } from "react-icons/fa";




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default Main;

// function Navbar()
// {
//   return(
    // <nav className="navStyle">
    
    //   <ul className="liStyle">
    //     <li><a href="#Hero">Home</a>
    //     <div className="underStyle"></div>
    //     </li>
        
    //     <li><a href="#About">About</a>
    //       <div className="underStyle"></div>
    //     </li>
    //     <li><a href="#education">Education</a>
    //       <div className="underStyle"></div>
    //     </li>
    //     <li><a href="#Skills">Skills</a>
    //       <div className="underStyle"></div>
    //     </li>
    //     <li><a href="#Project">Project</a>
    //       <div className="underStyle"></div>
    //     </li>
    //     <li><a href="#contact">Contact</a>
    //       <div className="underStyle"></div>
    //     </li>
    //   </ul>
    // </nav>
//   );
// }

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navStyle">
//       <div className="nav-container">
//         <div className="logo">Vaibhav</div>

//         <div className="hamburger" onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul className={`liStyle ${isOpen ? "active" : ""}`}>
//           <li onClick={closeMenu}><a href="#Hero">Home</a></li>
//           <li onClick={closeMenu}><a href="#About">About</a></li>
//           <li onClick={closeMenu}><a href="#education">Education</a></li>
//           <li onClick={closeMenu}><a href="#Skills">Skills</a></li>
//           <li onClick={closeMenu}><a href="#Project">Project</a></li>
//           <li onClick={closeMenu}><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Vaibhav</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#Hero" onClick={closeMenu}>Home</a>
        <div className="underStyle"></div></li>
        <li><a href="#About" onClick={closeMenu}>About</a>
        <div className="underStyle"></div></li>
        <li><a href="#education" onClick={closeMenu}>Education</a>
        <div className="underStyle"></div></li>
        <li><a href="#Skills" onClick={closeMenu}>Skills</a>
        <div className="underStyle"></div></li>
        <li><a href="#Project" onClick={closeMenu}>Projects</a>
        <div className="underStyle"></div></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a>
        <div className="underStyle"></div></li>
      </ul>
    </nav>
  );
}


// export default Navbar;
function Button(props)
{
  return(
<div className="btn"><a href="/resume.pdf" download>
      {props.value}
    </a>
    </div>
  );
}
function Hero()
{
 
  return(
    <div className="MainHero" id="Hero">
        <div className="photo">
          <img src={vaibhavImage} alt="Vaibhav Salve" />
          <div className="plate">Mr. Vaibhav Salve</div>
        </div>
         <div className="txt">
          <div className="curs">
        <h1 className="myname">Vaibhav </h1>
        <h1 className="myname"> Salve</h1>
        </div>
        <p>Full Stack Web Developer</p>
        <Button value="Download Resume"/>
        </div>
    </div>
  );
}

function About()
{
  return(
    <div className="mainAb" id="About">
      <h2 className="hed">About</h2>
      <p className="abt">I’m Vaibhav Salve, a 3rd year <label className="hgt">Computer Engineering</label> student at Sanjivani College of Engineering.
      I specialize in <label className="hgt">web development </label>and love crafting user-friendly, full-stack applications. I’ve completed projects using <label className="hgt">HTML, CSS, JavaScript, and Git</label>as a frontend and<label className="hgt"> Node.js, Express, and MongoDB</label>.
      My goal is to become a backend expert and contribute to real-world projects through internships or freelance opportunities.
</p>
    </div>
  )
}

function Education()
{
  return(
    <div className="edu" id="education">
      <h2 className="hed">Education</h2>
      <div className="mainTab">
      <table border="4">
        <caption>Education</caption>
        <tr>
            <th>Stream/Degree</th>
            <th>Institute</th>
            <th>Percentage</th>
            <th>Year</th>
        </tr>
        <tr>
            <td>B.Tech(Computer Engineering)</td>
            <td>Sanjivani College of Engineering, Kopargaon</td>
            <td>88%</td>
            <td>2023-2027</td>
        </tr>
        <tr>
            <td>HSC</td>
            <td>K.B.Rohmare Jr. College, Kopargaon</td>
            <td>81%</td>
            <td>2023</td>
        </tr>
        <tr>
            <td>SSC</td>
            <td>Somaiya Vidya Mandir Laxmiwadi</td>
            <td>92%</td>
            <td>2020</td>
        </tr>
    </table>
    </div>
    </div>
  );
}

// function Cards()
// {
//   const users = [
//   { name: "hello", age: 20, work: "Developer" },
//   { name: "Sneha", age: 22, work: "Designer" },
//   { name: "Vaibhav", age: 20, work: "Developer" },
//   { name: "Sneha", age: 22, work: "Designer" },
//   { name: "Vaibhav", age: 20, work: "Developer" },
//   { name: "Sneha", age: 22, work: "Designer" },
// ];

//   return(
//     <div>
//       <ul>
//         {users.map((user,index)=>(
          
//           <MyApp name={user.name} age={user.age} work={user.work}></MyApp>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Cards(props)
{
  return(
    <div className="out">
      <h3 className="card-head">{props.title}</h3>
      <ul className="card-ul">
        {/* <li>✅HTML</li>
        <li>✅CSS</li>
        <li>✅Javascript</li>
        <li>✅React</li> */}
        {props.skills.map((skill, index) => (
          <li key={index}>✅{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills()
{
  const front=["HTML","CSS","Javascript","React"];
  const back=["Node.js","Express.js","REST API","Hosting"];
  const db=["Mongo DB","MySQL"];
  const other=["C","C++","Java","Python"]
  return(
    <div className="Skill" id="Skills">
      <h2 className="hed">Skills</h2>
      <div className="card-div">
        <Cards skills={front} title="Frontend"></Cards>
        <Cards skills={back} title="Backend"></Cards>
        <Cards skills={db} title="Database"></Cards>
        <Cards skills={other} title="Other"></Cards>
      </div>
      
    </div>
  );
}

function Project_card(props)
{
  return(
    <div className="outProject">
      {/* <h3 className="pro_hed">props.hed</h3>
      <div className="demo">props.demo</div>
      <div className="code">props.code</div> */}

      <h3 className="pro_hed">{props.hed}</h3>
      <a href={props.demo}><div className="prBtn">Live Demo</div></a>
      <a href={props.code}><div className="prBtn">Source Code</div></a>
    </div>
  );
}

function Project()
{
  return(
    <div className="Main-proj" id="Project">
      <h2 className="hed">Projects</h2>
      <div className="proj_cards">
        <Project_card hed="1.Counter App" demo="https://counter-kappa-ruddy-17.vercel.app/" code="https://github.com/abcdjjejejsj/Web-projects/tree/main/01_Counter_App"></Project_card>

        <Project_card hed="2.To Do List" demo="https://todolist-taupe-chi.vercel.app/" code="https://github.com/abcdjjejejsj/Web-projects/tree/main/02_To_do_list"></Project_card>
        <Project_card hed="3.Calculator" demo="https://web-projects-hytt.vercel.app/" code="https://github.com/abcdjjejejsj/Web-projects/tree/main/03_Calculator"></Project_card>
        <Project_card hed="4.Tic Tac To" demo="https://tictactoebyvaibhav.vercel.app/" code="https://github.com/abcdjjejejsj/Web-projects/tree/main/04_Tic_Tac_Toe"></Project_card>
        <Project_card hed="5.Quiz" demo="https://javaquizbyvaibhav.vercel.app/" code="https://github.com/abcdjjejejsj/Web-projects/tree/main/06_Java_quiz"></Project_card>
      </div>
    </div>
  );

}



function Contact_card()
{
  return(
    <div className="main_con" id="contact">
      <h2 className="hed">Contact me</h2>
      <div className="main_card">
          <img src="vaibhav.png" className="prof"></img>
          <label className="nme">Vaibhav Salve</label>
          <label className="conVal"><img src="email.png"></img>: vaibhavsalve645@gmail.com</label>
          <label className="conVal"><img src="contact.png"></img>: 9657086779</label>
          <label className="conVal"><img src="location.avif"></img>:Shirdi, Taluka-Rahata ,Dist -Ahilyanagar</label>
          <div className="con">
            <a href="https://www.linkedin.com/in/vaibhav-salve2005"><img src="linkdin.jpeg"></img></a>
            <a href="https://github.com/abcdjjejejsj"><img src="github.png" id="git"></img></a>
            <a href="https://www.instagram.com/vaibhavsalve25?igsh=MWM5dnZqZmF2b3NmZg=="><img src="instagram.png" id="insta"></img></a>
          </div>
      </div>
    </div>
  );
}

function Foot()
{
  return(
    <div className="main_foot">
      <h2 className="footex">Made by @Vaibhav_Salve</h2>
    </div>
  );
}

function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact_card/>
      <Foot/>
    </div>
  );
}

export default Home;

