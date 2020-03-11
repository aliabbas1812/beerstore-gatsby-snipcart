import React from "react"
import { StaticQuery , Link} from "gatsby"
import './index.css'

const Products = () => (
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
         
        <div class="bb">
            <h1>Downtown Liquors</h1>
         <img class="hero-image" src="https://cdnimg.webstaurantstore.com/images/articles/27/types-of-beer-header.jpg"></img>
         <div class="quote">
           <div>
           <Link className="home" to="/">Home</Link> 
             <a  class="food" href="https://www.thebeerstore.ca/articles/beer-food-pairings/">Beer-Foodpairing</a>
             <a class="styles"  href="https://www.thebeerstore.ca/beer-101/beer-types/">Beer-Styles</a>
             <a class ="certi" href="https://www.thebeerstore.ca/beer-101/beer-certification/">Beer-Certification</a>
           </div>
        </div>
        <br></br>
        <br></br>
<div className="ali">
            
    
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
                 {/* src = {project.Image.url} */}
               </div>
             )
           })}
           
           </div>
           <img className="il" src="https://i.pinimg.com/originals/68/0c/d0/680cd0c077dc2248f241e0ad2ab651e1.png"></img>
         </div>
         
            )
     
        }
        
         />  
       )
       export default Products