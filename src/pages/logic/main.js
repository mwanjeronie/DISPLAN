document.getElementById('discussion-plan-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    
    console.log('Discussion Plan Created:', { title, description, date });
    
    const plansContainer = document.getElementById('plans-container');
    const planCard = document.createElement('div');
    planCard.className = 'plan-card';
    planCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Date:</strong> ${date}</p>
    `;
    plansContainer.appendChild(planCard);
    
    // Clear the form
    document.getElementById('discussion-plan-form').reset();
});
