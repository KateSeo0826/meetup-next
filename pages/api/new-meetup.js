import { MongoClient } from 'mongodb'
//api/new-meetup
//POST/api/new-meetup
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const client = await new MongoClient.connect(
            process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        const db = client.db()
        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)
        client.close()
        res.status(201).json({ message: 'Meetup inserted' })
    }
}

export default handler