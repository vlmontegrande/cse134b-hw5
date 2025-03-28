document.addEventListener('DOMContentLoaded', function() {
    function searchProjects(query) {
        let projects = document.querySelectorAll('.project-card');
        query = query.toLowerCase();
        
        projects.forEach(project => {
            let title = project.querySelector(".project-title").textContent.toLowerCase();
            let description = project.querySelector(".project-description").textContent.toLowerCase();
            
            if(title.includes(query) || description.includes(query)) {
                project.style.display = "flex";
            } else {
                project.style.display = "none";
            }
        });
    }

    // Get the search input
    const searchInput = document.querySelector("#project-search");
    
    if (searchInput) {
        // Add input event listener to make search real-time
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            searchProjects(query);
        });
    }
});
