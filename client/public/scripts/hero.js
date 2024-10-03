const hero = document.getElementById('hero')

const title = document.createElement('h1')
title.textContent = 'Ideally'

const subtitle = document.createElement('p')
subtitle.textContent = 'A platform to share your ideas'

hero.appendChild(title)
hero.appendChild(subtitle)