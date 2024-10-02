// Asynchronous function to fetch and render idea data
const renderIdeas = async () => {
    try {
        // Fetch data from the /ideas endpoint
        const response = await fetch('/ideas')
        const data = await response.json()

        // Select the main content area
        const mainContent = document.getElementById('main-content')

        // Check if data is available
        if (data && data.length > 0) {
            // Map over the data and create a card for each idea
            data.forEach(idea => {
                // Create a card container
                const card = document.createElement('div')
                card.className = 'card'

                // Create the top container with the idea image
                const topContainer = document.createElement('div')
                topContainer.className = 'top-container'
                topContainer.style.backgroundImage = `url(${idea.image})`
                topContainer.style.backgroundSize = 'cover'
                topContainer.style.backgroundPosition = 'center'

                // Create the bottom container with idea details
                const bottomContainer = document.createElement('div')
                bottomContainer.className = 'bottom-container'

                // Create the idea name element
                const ideaName = document.createElement('h3')
                ideaName.textContent = idea.name

                // Create the price point element
                const pricePoint = document.createElement('p')
                pricePoint.textContent = `Price: ${idea.pricePoint}`

                // Create the audience element
                const audience = document.createElement('p')
                audience.textContent = `Audience: ${idea.audience}`

                // Create the 'Read More' link
                const readMore = document.createElement('a')
                readMore.textContent = 'Read More >'
                readMore.href = `/ideas/${idea.id}`
                readMore.setAttribute('role', 'button')

                // Append elements to the bottom container
                bottomContainer.appendChild(ideaName)
                bottomContainer.appendChild(pricePoint)
                bottomContainer.appendChild(audience)
                bottomContainer.appendChild(readMore)

                // Append top and bottom containers to the card
                card.appendChild(topContainer)
                card.appendChild(bottomContainer)

                // Append the card to the main content area
                mainContent.appendChild(card)
            })
        } else {
            // If no data is available, show a 'No Ideas Available' message
            const noIdeasMessage = document.createElement('h2')
            noIdeasMessage.textContent = 'No Ideas Available 😞'
            mainContent.appendChild(noIdeasMessage)
        }
    } catch (error) {
        console.error('Error fetching idea data:', error)
    }
}

// Function to determine if the current page is the main page
const isMainPage = () => {
    const pathname = window.location.pathname
    return pathname === '/' || pathname === '/index.html'
}

// Function to determine if the URL is for a specific idea
const isIdeaPage = () => {
    const pathname = window.location.pathname
    const ideaId = pathname.split('/').pop()
    return !isNaN(ideaId) && pathname.includes('/ideas/')
}

// Redirect to 404 if the URL is invalid
const handleInvalidUrl = () => {
    if (!isMainPage() && !isIdeaPage()) {
        window.location.href = '../404.html'
    } else if (isMainPage()) {
        renderIdeas()
    }
}

// Call the function to handle the current URL
handleInvalidUrl()
