document.addEventListener('DOMContentLoaded', () => {
    const username = 'FLQMCDev';

    // Fetch and display GitHub repos
    if (document.getElementById('project-list')) {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
            .then(response => response.json())
            .then(data => {
                const projectList = document.getElementById('project-list');
                data.forEach(repo => {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'project';
                    projectDiv.innerHTML = `
                        <div class="project-content">
                            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                            <p>${repo.description || 'No description available'}</p>
                        </div>
                    `;
                    projectList.appendChild(projectDiv);
                });
            })
            .catch(error => console.error('Error fetching repos:', error));
    }
    
    // GSAP animations with enhanced effects
    gsap.fromTo('header .hero-content', 
        { opacity: 0, y: 100, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: 'back.out(1.7)' }
    );

    gsap.fromTo('main section', 
        { opacity: 0, y: 50, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 2, stagger: 0.5, ease: 'elastic.out(1, 0.5)' }
    );

    gsap.fromTo('footer', 
        { opacity: 0, y: 50, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: 'power4.out' }
    );

    // Hover effects for project elements
    gsap.utils.toArray('.project').forEach(project => {
        project.addEventListener('mouseenter', () => {
            gsap.to(project, {
                scale: 1.05,
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                duration: 0.5,
                ease: 'power3.out'
            });
        });

        project.addEventListener('mouseleave', () => {
            gsap.to(project, {
                scale: 1,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                duration: 0.5,
                ease: 'power3.out'
            });
        });
    });
});
