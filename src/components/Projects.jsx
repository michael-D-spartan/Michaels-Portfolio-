import { useState } from 'react';

// 1. Import all your images at the top
import todoImage from '../assets/todo-list.png';
import noteImage from '../assets/note.png';
import cocktailImage from '../assets/cocktail.png'; // Make sure to add the correct extension here!
import bookImage from '../assets/book.png';
import flipToTechImage from '../assets/FlipToTech.png';

const Projects = () => {
  const [projects] = useState([
    // 2. Replace the strings with the imported variables (remove the quotes)
    { id: 1, title: "To do list", description: "A simple to-do list with delete edit and add note buttons which makes use of core JS logic", image: todoImage, link: "https://to-do-list-glass.vercel.app/" },
    { id: 2, title: "Note-App", description: "A REACT JSX note app with modern css designs. It includes modals and functional buttons, basically an advanced version of the to-do list.", image: noteImage, link: "https://notes-app-beta-lime.vercel.app/" },
    { id: 3, title: "Cocktail app", description: "A JAVASCRIPT project to practice API calls and Java script functionality in building a single page/file routing ", image: cocktailImage, link: "https://cocktail-app-lyye.vercel.app/" },
    { id: 4, title: "Book Catalogue", description: "A REACT JSX practice project on UseEffect, UseState, Array-listing and REACT-form", image: bookImage, link: "https://book-catalouge-xi.vercel.app/" },
    { id: 5, title: "Flip To Tech Clone", description: "A clone of a Tech Academy Website", image: flipToTechImage, link: "https://flip-to-tech-clone.vercel.app/" },
  ]);

  return (
    <section className="projects-section" id="projects">
      {/* Added a title here */}
      <h2 className="section-title">My Projects</h2> 
      
      <div className="container">
        {projects.map(project => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Added text inside the anchor tag so it's clickable */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;