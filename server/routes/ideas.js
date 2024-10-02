import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { getIdeas } from './controllers/ideas.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', getIdeas)

router.get('/', (req, res) => {
    res.status(200).json(ideaData)
})

router.get('/:ideaId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/idea.html'))
})

export default router