// Function to show the loading screen
const showLoading = () => {
    const loadingElement = document.createElement('div')
    loadingElement.id = 'loading'

    const spinner = document.createElement('div')
    spinner.className = 'spinner'

    const loadingText = document.createElement('p')
    loadingText.textContent = 'Loading idea details...'

    loadingElement.appendChild(spinner)
    loadingElement.appendChild(loadingText)
    document.body.appendChild(loadingElement)
}

// Function to hide the loading screen
const hideLoading = () => {
    const loadingElement = document.getElementById('loading')
    if (loadingElement) {
        loadingElement.remove()
    }
}

const renderIdea = async () => {
    try {
        showLoading() // Show loading screen

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

        console.log(data)

        // Find the idea that matches the requested ID
        const idea = data.find(idea => idea.id === requestedID)

        if (idea) {
            // Set the idea details in the DOM
            document.getElementById('idea-image').src = `../${idea.image}`
            document.getElementById('idea-image').alt = `${idea.ideaname} - Idea Image`
            document.getElementById('name').textContent = idea.ideaname
            document.getElementById('submittedBy').textContent = `Submitted by: ${idea.submittedby}`
            document.getElementById('submittedOn').textContent = `Submitted on: ${new Date(idea.submittedon).toLocaleDateString()}`
            document.getElementById('tags').textContent = `Tags: ${idea.projecttags}`
            document.getElementById('description').textContent = idea.ideadescription

            // Set the page title to the idea name
            document.title = `${idea.ideaname} - Idea Details`
        } else {
            throw new Error('Idea not found')
        }
    } catch (error) {
        console.error('Error rendering idea details:', error)
        // Display error message on the page
        const errorMessage = document.createElement('h2')
        errorMessage.textContent = 'Error: Idea not found'
        document.getElementById('idea-content').appendChild(errorMessage)
    } finally {
        hideLoading() // Hide loading screen regardless of success or failure
    }
}

// Call the renderIdea function to display the idea details
renderIdea()


// const renderIdea = async () => {
//     try {
//         // Parse the idea ID from the URL
//         const pathSegments = window.location.pathname.split('/')
//         const requestedID = parseInt(pathSegments[pathSegments.length - 1])

//         if (isNaN(requestedID)) {
//             throw new Error('Invalid idea ID')
//         }

//         // Fetch all idea data
//         const response = await fetch('/ideas')
//         if (!response.ok) {
//             throw new Error('Failed to fetch ideas')
//         }
//         const data = await response.json()

//         console.log(data)

//         // Find the idea that matches the requested ID
//         const idea = await data.find(idea => idea.id === requestedID)

//         if (idea) {
//             // Set the idea details in the DOM
//             document.getElementById('image').src = idea.image
//             document.getElementById('image').alt = idea.ideaname
//             document.getElementById('name').textContent = idea.ideaname
//             document.getElementById('submittedBy').textContent = `Submitted by: ${idea.submittedby}`
//             document.getElementById('submittedOn').textContent = `Submitted on: ${idea.submittedon.split('T')[0]}`
//             document.getElementById('tags').textContent = `Tags: ${idea.projecttags}`
//             document.getElementById('description').textContent = idea.ideadescription

//             // Set the page title to the idea name
//             document.title = idea.ideaname
//         } else {
//             throw new Error('Idea not found')
//         }
//     } catch (error) {
//         console.error('Error rendering idea details:', error)
//         // Redirect to 404 page if there's an error
//         window.location.href = '/404.html'
//     }
// }

// // Call the renderIdea function to display the idea details
// renderIdea()