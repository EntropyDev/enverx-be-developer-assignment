import express from 'express'
import postsRouter from './routes/postsRouter'
import dotenv from 'dotenv'
import { createPostsTable, createCategoryTable } from './models/database'


dotenv.config()

const hostname: string = '127.0.0.1'
const port: number = 5000


const app: express.Application = express()

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(202)
    response.json({"name": "Vaibhav"})
})

app.use('/posts', postsRouter)

// createCategoryTable()
// createPostsTable()

app.listen(port, hostname, ()=>{
    console.log(`Listening at ${hostname} : ${port}`)
})

