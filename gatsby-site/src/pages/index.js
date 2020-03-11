import React from "react"
import { StaticQuery, Link } from "gatsby"
import './index.css'
import Products from "./Products"


const IndexPage = () => (
  <StaticQuery
    query={graphql`
    {
      gcms {
        projects {
          title
          description
          price
          image {
            url
          }
        }
      }
    }
    `}
    render={
     data => (
       <div class="bb" >
         
         <img class="hero-image" src="https://pbs.twimg.com/profile_images/906269077508907009/M37-J-R4.jpg"></img>
         <div class="quote">
           <div >
              <Link className="home" to="/">Home</Link> 
             <a  class="food" href="https://www.thebeerstore.ca/articles/beer-food-pairings/">Beer-Foodpairing</a>
             <a class="styles"  href="https://www.thebeerstore.ca/beer-101/beer-types/">Beer-Styles</a>
             <a class ="certi" href="https://www.thebeerstore.ca/beer-101/beer-certification/">Beer-Certification</a>
           </div>
          
           
         </div>
         
          <p className="bq">“Whoever drinks beer, he is quick to sleep; whoever
          sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!” </p>  <br></br>
        <br></br><Link className="link" to="/Products"> 
           <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoB4P9BVueP80Mv2Y38KzoEQLtnR1cpUwhN47EKs_d4E-qe4zF"></img>
           </Link>
           <img className="image" src="https://www.buttonmuseum.org/sites/default/files/BE-we-want-beer-button-busy-beaver-button-museum-copy.png"></img>
           <div className="qq">
  {/* <p>“I look up at the sky, wondering if I'll 
  catch a glimpse of kindness there, but I don't. Al
  l I see are
   indifferent
    summer clouds 
    drifting over the
     Pacific. And they
      have nothing to
       say to me. Clouds
        are always taciturn. I probably shouldn't be looking
         up at them. What I should be looking at is inside of me. Like
          staring down into a deep well. Can I see kindness there? No, all I see 
          is my own nature. My own individual, stubborn, uncooperative often self-centered nature
           that still doubts itself--that, when troubles occur, tries to find something funny, or something
            nearly funny, about the situation. I've carried this character around like an old suitcase, down a long,
             dusty path. I'm not carrying it because I like it. The contents are too heavy, and it looks crummy, fraying in spots. I've carried it with me because there was nothing 
  else I was supposed to carry. Still, I guess I have grown attached to it. As you might expect.”</p> */}
  {/* <img className="i0" src="https://i.pinimg.com/564x/b8/23/e9/b823e91a4922b2711f120799458b18be.jpg"></img>
  <img className="i1" src="https://i.pinimg.com/236x/d3/06/6c/d3066c929ec5720633df29119bca22d6--no-worries-memories.jpg"></img> */}
  <img className="i0" src="https://media1.tenor.com/images/d54ab568a5e01fa75d7312bbf60b26a1/tenor.gif?itemid=5329267"></img>
  <img className="i2" src="https://i.pinimg.com/564x/a6/60/e4/a660e49ee4e0d5639aa23a4ce699356f.jpg"></img>
  <img className= "i3" src="https://i.pinimg.com/474x/94/e1/e2/94e1e2ee8df242bea89cf37df22bbc88--funny-beer-quotes-random-quotes.jpg"></img>  
  
    </div>
  <p className="pp1">“I look up at the sky,
   wondering if I'll catch a glimpse of kindness there, but I don't.
    All I see are indifferent summer clouds drifting over the Pacific. An
    d they have nothing to say to me. Clouds are always taciturn. I probably shou
    ldn't be looking up at them. What I should be looking at is inside of me. Like sta
    ring down into a deep well. Can I see kindness there? No, all I see is my own nature. My 
    own individual, stubborn, uncooperative often self-centered nature that still doubts itself--t
    hat, when troubles occur, tries to find something funny, or something nearly funny, about the situation. I've carried this character around like an old suitcase, down a long, dusty path. I'm not carrying it because I like it. The contents are too heavy, and it looks crummy, fraying in spots. I've carried it with me because there was 
  nothing else I was supposed to 

  carry. Still, I guess I have grown attached to it. As you might expect.”</p>
  <p className="bbb">Sniff, stare, sip, swish, savor, swallow. Simple.</p>
  <img className="il" src="https://i.pinimg.com/originals/68/0c/d0/680cd0c077dc2248f241e0ad2ab651e1.png"></img>
  
  {/* <img className="i4" src="https://i.pinimg.com/564x/b8/23/e9/b823e91a4922b2711f120799458b18be.jpg"></img> */}

        
         {/* <div className="ali">
           {data.gcms.projects.map(project => {
             //const { title, description, price} = project
             return (

               <div class="top" key={project.id}>                
               <div class="hero"><img id="d" src = {project.image ? project.image.url : undefined} alt={project.title}></img>
               <button class="snipcart-add-item"
                       data-item-id={project.id}
                        data-item-price={project.price}
                         data-item-description={project.description}
                         data-item-image={project.image.url}
                          data-item-name={project.title}>
                          Add to cart
                   </button>
               </div>
                 
                 <div class="cta">
                 <li class="cta cta1"><strong>Title:</strong>{project.title}</li>
                 <li class="cta cta2"><strong>Description:</strong>{project.description}</li>
                 <li class="price"><strong>Price: </strong>{project.price}</li>
                 </div>
                 src = {project.Image.url}
               </div>
             )
           })}
         </div> */}
       </div>
       
       
     )
     
 }
 
  />  
)
export default IndexPage


















