document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.querySelector(".skills-container");
  
    const skills = [
      { name: "Java Development", description: "Building scalable back-end applications." },
      { name: "JavaScript & DOM", description: "Creating dynamic user interfaces." },
      { name: "CSS & Design", description: "Crafting visually appealing layouts." },
      { name: "Git & Version Control", description: "Managing codebases effectively." },
      { name: "Debugging & Analysis", description: "Troubleshooting complex issues." },
      { name: "API Integration", description: "Seamless API consumption and creation." },
      { name: "Thread & Heap Dumps", description: "Advanced diagnostics for performance." }
    ];
  
    // Function to render skills dynamically
    const renderSkills = () => {
      skills.forEach((skill, index) => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card", "animated");
        skillCard.style.animationDelay = `${index * 0.2}s`; // Add delay for each card
  
        skillCard.innerHTML = `
          <h3>${skill.name}</h3>
          <p>${skill.description}</p>
        `;
  
        skillsContainer.appendChild(skillCard);
      });
    };
  
    // Trigger skill rendering on scroll
    let skillsLoaded = false;
  
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const skillsTop = skillsSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
  
      if (!skillsLoaded && skillsTop < triggerPoint) {
        renderSkills();
        skillsLoaded = true; // Prevent re-rendering
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  });