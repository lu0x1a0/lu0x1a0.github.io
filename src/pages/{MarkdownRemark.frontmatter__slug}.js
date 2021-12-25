import React, {useEffect,useState,useRef} from "react"
import { graphql } from "gatsby"
import './styling.css'
import { StaticImage } from "gatsby-plugin-image"
function SideNavBar(){
  return (
    <div className="sidebar">
      <a className="sections active" href="#home">Home</a>
      <a className= 'sections' href="#About">About</a>
      <a className= 'sections' href="#Skills">Skills</a>
      <a className= 'sections' href="#Projects">Project</a>
      <a className= 'sections' href="#Projects">Contact</a>
      <div className = 'bottom'>
        <div className = 'reachout'>
              
          <a href = 'https://www.linkedin.com/in/sean-luo-b4608a15b/'>
            <StaticImage 
              src="../images/linkedin_icon.png" 
              alt="linkedin icon" 
              width={32}
              height={32}
            />
          </a>
          
          <a href = 'https://github.com/lu0x1a0'>
            <StaticImage 
              src="../images/github_icon.png" 
              alt="github icon" 
              width={32}
              height={32}
            />
          </a>

        </div>
        <div className = 'credit'>
          Powered by Gatsby
        </div>
      </div>
    </div>
  )
}
function Header(params){
    if (params.url !== '/'){
        return <h2>{params.date}</h2>
    }
    else{
      return <p></p>
    }
}


function AppWs() {
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
      ws.current = new WebSocket("wss://ws.kraken.com/");
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      const wsCurrent = ws.current;
      console.log("CALLED 1")
      return () => {
          wsCurrent.close();
      };
  }, []);

  useEffect(() => {
      console.log("CALLED 2")
      console.log(ws.current)
      if (!ws.current) return;
      
      ws.current.onmessage = e => {
          if (isPaused) return;
          const message = JSON.parse(e.data);
          console.log("e", message);
      };
  }, [isPaused]);

  return (
      <div>
          <button onClick={() => setPause(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
          </button>
      </div>
  );
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let demo;
  if (frontmatter.slug === '/'){
    demo = <AppWs/>
  } else {
    demo = <p/>
  }
  return (
    <div>
      <SideNavBar />
      <div className="blog-post-container content">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <Header url =  {frontmatter.slug} date =  {frontmatter.date}/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {demo}
      </div>
    </div>
    
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`