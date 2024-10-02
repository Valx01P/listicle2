// Asynchronous function to fetch and render idea data
const renderIdeas = async () => {
    try {
        // Fetch data from the /ideas endpoint
        const response = await fetch('/ideas')
        const data = await response.json()

        console.log(data)

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

                // Create the image element
                const imageElement = document.createElement('img')
                imageElement.src = idea.image
                imageElement.alt = idea.ideaname
                imageElement.className = 'idea-image'

                // Append image to top container
                topContainer.appendChild(imageElement)

                // Create the bottom container with idea details
                const bottomContainer = document.createElement('div')
                bottomContainer.className = 'bottom-container'

                // Create the idea name element
                const ideaName = document.createElement('h3')
                ideaName.textContent = idea.ideaname

                // Create the tags element
                const projectTags = document.createElement('p')
                projectTags.textContent = `${idea.projecttags}`

                // Create the 'Read More' link
                const readMore = document.createElement('a')
                readMore.textContent = 'Read More >'
                readMore.href = `/ideas/${idea.id}`
                readMore.setAttribute('role', 'button')

                // Append elements to the bottom container
                bottomContainer.appendChild(ideaName)
                bottomContainer.appendChild(projectTags)
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

// The rest of your code remains unchanged
const isMainPage = () => {
    const pathname = window.location.pathname
    return pathname === '/' || pathname === '/index.html'
}

const isIdeaPage = () => {
    const pathname = window.location.pathname
    const ideaId = pathname.split('/').pop()
    return !isNaN(ideaId) && pathname.includes('/ideas/')
}

const handleInvalidUrl = () => {
    if (!isMainPage() && !isIdeaPage()) {
        window.location.href = '../404.html'
    } else if (isMainPage()) {
        renderIdeas()
    }
}

handleInvalidUrl()