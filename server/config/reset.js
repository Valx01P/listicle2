import { pool } from "./database.js";
import './dotenv.js';
import ideaData from '../data/ideas.js';



const createTableQuery = `
    DROP TABLE IF EXISTS ideas;

    CREATE TABLE IF NOT EXISTS ideas (
        id SERIAL PRIMARY KEY,
        ideaName VARCHAR(255) NOT NULL,
        ideaDescription TEXT NOT NULL,
        projectTags VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`


const createIdeasTable = async () => {
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 ideas table created successfully')
    } catch (err) {
        console.error('⚠️ error creating ideas table', err)
    }
}

const seedIdeasTable = async () => {
    await createIdeasTable()
    ideaData.forEach((idea) => {
        const insertQuery = {
            text: 'INSERT INTO ideas (ideaName, ideaDescription, projectTags, image, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            idea.ideaName,
            idea.ideaDescription,
            idea.projectTags,
            idea.image,
            idea.submittedBy,
            idea.submittedOn
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting idea', err)
                return
            }
            console.log(`✅ ${idea.ideaName} added successfully`)
        })
    })
  }

  seedIdeasTable()