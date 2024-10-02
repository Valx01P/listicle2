const renderIdea = async () => {
    try {
        // Parse the idea ID from the URL
        const pathSegments = window.location.pathname.split('/')
        const requestedID = parseInt(pathSegments[pathSegments.length - 1])

        if (isNaN(requestedID)) {
            throw new Error('Invalid idea ID')
        }

        // Fetch all idea data
        const response = await fetch('/ideas')
        if (!response.ok) {
            throw new Error('Failed to fetch ideas')
        }
        const data = await response.json()

        // Find the idea that matches the requested ID
        const idea = data.find(idea => idea.id === requestedID)

        if (idea) {
            // Set the idea details in the DOM
            document.getElementById('image').src = idea.image
            document.getElementById('image').alt = idea.name
            document.getElementById('name').textContent = idea.name
            document.getElementById('submittedBy').textContent = `Submitted by: ${idea.submittedBy}`
            document.getElementById('submittedOn').textContent = `Submitted on: ${idea.submittedOn}`
            document.getElementById('pricePoint').textContent = `Price: ${idea.pricePoint}`
            document.getElementById('audience').textContent = `Audience: ${idea.audience}`
            document.getElementById('description').textContent = idea.description

            // Set the page title to the idea name
            document.title = idea.name
        } else {
            throw new Error('Idea not found')
        }
    } catch (error) {
        console.error('Error rendering idea details:', error)
        // Redirect to 404 page if there's an error
        window.location.href = '/404.html'
    }
}

// Call the renderIdea function to display the idea details
renderIdea()