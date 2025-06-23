// import logo from './logo.svg';
 import './App.css';
import React, { useState, useEffect } from 'react';
import vaibhavImage from './vaibhav.png';





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
// function MyApp(props) {
  // const name = "Ramlal Kothari";
  // const age = 23;
  // const work = "Full Stack Developer";
  // const profile = "https://th.bing.com/th/id/OIP.vHlGtplZtQYvbLBRSLrSNgAAAA?rs=1&pid=ImgDetMain";

//   return (
//     <div className="main">
//       <div className="profile">
//         <img src={props.profile} alt="Profile" />
//       </div>
//       <div className="info">
//         <br />
//         <label className="name">Name:</label> <label className="val">{props.name}</label>
//         <br /><br /><br />
//         <label className="age">Age:</label> <label className="val">{props.age}</label>
//         <br /><br /><br />
//         <label className="work">Work:</label> <label className="val">{props.work}</label>
//       </div>
//     </div>
//   );
// }

// function MeraApp()
// {
//   return(
//     <div class="m">
//     <MyApp name="Vaibhav Salve" age="23" work="tester" profile="https://images.hindustantimes.com/tech/img/2022/03/22/1600x900/woman-3083382_1920_1625503141968_1647921702617.jpg"/>
//     <MyApp name="ram pathare" age="33" work="developer" profile="https://th.bing.com/th/id/OIP.8wcWvdKMIaGDKE3bNHIoBwHaEK?w=1280&h=720&rs=1&pid
//     =ImgDetMain"/>
//     </div>

    
    
//   );
// }

// function Like()
// {
//   const [likes,setLikes]=useState(0);
//   function handle(){
//     setLikes(likes+1);
//   };
//   return(
//     <div class="dil">
//       <h1 class="like" onClick={handle}>❤️</h1>
//     <label class="lik">{likes}</label>
//     </div>
//   );
// }

// function MyButton(props) {
//   return (
//     <button>{props.name}</button>
//   );
// }

// function Button(){
//   return(
//   <div>
//     <MyButton name="click me"></MyButton>
//     <MyButton name="submit"></MyButton>
//     <MyButton name="send"></MyButton>
//     <MyButton name="donate"></MyButton>
   
//   </div>



//   );
// }

// function Signin(){
//   return(
//     <div className="outer">
//       <h1 className="txt">Sign in</h1>
//     </div>
//   );
// }

// function Signup(){
//   return(
//     <div className="outer">
//       <h1 className="txt">Sign up</h1>
//     </div>
//   );
// }


// function auth(){
//   return(
//     <div className="aaa">
//       <Signin/>
//       <Signup/>
//     </div>
//   );
// }

// function Toggle(){
//   return(
//     <button>Dark/Light</button>
//   );
// }
// // export default MeraApp;
// export default Toggle;

//import { useState } from "react";

// function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   const appStyle = {
//     height: "100vh",
//     backgroundColor: isDark ? "black" : "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

  // const buttonStyle = {
  //   height: "60px",
  //   width: "140px",
  //   borderRadius: "20px",
  //   backgroundColor: "rgb(2, 255, 255)",
  //   border: "none",
  //   fontSize: "20px",
  //   color: "rgb(41, 9, 158)",
  //   fontWeight: "bolder",
  //   fontFamily:
  //     "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  //   cursor: "pointer",
  //   boxShadow: "4px 3px 3px",
  // };

//   return (
//     <div style={appStyle}>
//       <button style={buttonStyle} onClick={toggleTheme}>
//         Dark/Light
//       </button>
//     </div>
//   );
// }

// export default ThemeToggle;

function Pass()
{
  const text={
    fontSize:"20px",
    fontWeight:"bolder"
  }
  const buttonStyle = {
    height: "40px",
    width: "140px",
    borderRadius: "20px",
    backgroundColor: "rgb(2, 255, 255)",
    border: "none",
    fontSize: "20px",
    color: "rgb(41, 9, 158)",
    fontWeight: "bolder",
    fontFamily:
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    cursor: "pointer",
    boxShadow: "4px 3px 3px",
    marginLeft:"70px"
  };

  const [state,stateChange]=useState(false);

  function change()
  {
    stateChange(!state);
  }

  return(
    <div>
      <label style={text}>Password : </label>
      <input type={state? "password":"text"}></input><br/><br/>
      <button style={buttonStyle} onClick={change}>Show/hide</button>
    </div>
  );
}

//export default Pass;

// function Task3()
// {
//   const [state,stateChange]=useState("");
//   function handler(e)
//   {
//     stateChange(e.target.value);
//   }
//   return(
//    <div>
//     <input type="text" placeholder="type here........" onChange={handler}></input>
//     <h3>{state}</h3>
//    </div>
//   );
// }

// export default Task3;

function Task4()
{
  const [state,stateChange]=useState("black");

  function handler(e)
  {
    stateChange(e.target.value);
  }

  let divStyle={
    backgroundColor:state,
    height:"500px",
    width:"500px",
    marginLeft:"250px",
    marginTop:"200px"
  }

  return(
    <div>
    Color : <input type="color" onChange={handler}></input>
    <div style={divStyle}></div>
    </div>
  );
}

//export default Task4;



//export default Cards;
function FeedbackForm() {
  const formStyle = {
    width: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9"
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[feed,setFeed]=useState("");
  const[rate,setRate]=useState("");

  function handler()
  {
    if(name=="" || email=="" || feed=="" || rate=="")
    {
      alert("All fields are required !");
    }else{
      alert("Form submitted successfully");
    }
  }

  return (
    <div style={formStyle}>
      <h2>Feedback Form</h2>

      <label style={labelStyle}>Name</label>
      <input type="text" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />

      <label style={labelStyle}>Email</label>
      <input type="email" style={inputStyle} value={email} onChange={(e)=> setEmail(e.target.value)} />

      <label style={labelStyle}>Feedback</label>
      <textarea rows="4" style={inputStyle} value={feed} onChange={(e) => setFeed(e.target.value)} ></textarea>

      <label style={labelStyle}>Rating</label>
      <select style={inputStyle} value={rate} onChange={(e) => setRate(e.target.value)}>
        <option value="">Select Rating</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <button style={buttonStyle} onClick={handler}>Submit</button>
    </div>
  );
}

//export default FeedbackForm;

function Counter() {
  // Step 1: State
  const [count, setCount] = useState(0);

  // Step 2: useEffect + setInterval
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Step 3: UI
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Count: {count}</h1>
    </div>
  );
}

//export default Counter;
function First()
{
  const body={
    backgroundColor:"red",
    height:"739px",
  }
  return(
   <div style={body}></div>
  );
}

function Second()
{
  const body={
    backgroundColor:"green",
    height:"400px",
  }
  return(
    <div style={body}></div>
  );
}

function Third()
{
  const body={
    backgroundColor:"yellow",
    height:"700px",
  }
  return(
    <div style={body}>Third</div>
  );
}

function Main()
{
  return(
 <div>
  <First/>
  <Second/>
  <Third/>
 </div>
  );
}



// export default Main;

function Navbar()
{
  const navStyle={
  backgroundColor:"rgb(0, 0, 0)",
  height:"60px",
  position:"fixed",
  margin:"-27px",
  color:"white",
  fontSize:"26px",
  textAlign:"center",
  fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  width:"1540px",
  }

  const liStyle={
    padding:"10px",
    listStyle:"none",
    
    
  }

  const under={
    backgroundColor:"green",
    height:"2px",
    width:"100px",
  }
  
  return(
    <nav style={navStyle}>
      <ul style={liStyle}>
        <li><a href="#Hero">Home</a>
        <div className="underStyle"></div>
        </li>
        
        <li><a href="#About">About</a>
          <div className="underStyle"></div>
        </li>
        <li><a href="#education">Education</a>
          <div className="underStyle"></div>
        </li>
        <li><a href="#Skills">Skills</a>
          <div className="underStyle"></div>
        </li>
        <li><a href="#Project">Project</a>
          <div className="underStyle"></div>
        </li>
        <li><a href="#contact">Contact</a>
          <div className="underStyle"></div>
        </li>
      </ul>
    </nav>
  );
}
let btnStyle={
  backgroundColor:"red"
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
  const btn1={
    border:"3px solid red",
  }
  return(
    <div className="MainHero" id="Hero">
        <div className="photo">
          <img src={vaibhavImage} alt="Vaibhav Salve" />
          <div className="plate">Mr.Vaibhav Salve</div>
        </div>
         <div className="txt">
          <div className="curs">
        <h1 className="myname">Vaibhav </h1>
        <h1 className="myname"> Salve</h1>
        </div>
        <p>Full Stack Web Developer</p>
        <Button value="Download Resume" style={btn1}/>
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

