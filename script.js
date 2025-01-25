document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
  
    // Your skills array
    const skills = [
      "Java Development",
      "JavaScript & DOM Manipulation",
      "CSS & UI Design",
      "Debugging & Troubleshooting",
      "Git & Version Control",
      "Heap & Thread Dump Analysis",
      "API Development & Integration",
    ];
  
    // Function to add skills dynamically
    const loadSkills = () => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          const skillDiv = document.createElement("div");
          skillDiv.classList.add("skill");
          skillDiv.textContent = skill;
          skillsSection.appendChild(skillDiv);
        }, index * 500); // Adds delay for dynamic effect
      });
    };
  
    // Load skills on scroll
    let skillsLoaded = false;
    window.addEventListener("scroll", () => {
      const skillsTop = skillsSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 150;
  
      if (!skillsLoaded && skillsTop < triggerPoint) {
        loadSkills();
        skillsLoaded = true; // Ensure it only loads once
      }
    });
  });