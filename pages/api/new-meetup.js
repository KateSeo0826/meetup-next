import { MongoClient } from 'mongodb'
//api/new-meetup
//POST/api/new-meetup
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const client = await MongoClient.connect(
            'mongodb+srv://kateseo:sds0611@cluster0.k52jyd6.mongodb.net/?retryWrites=true&w=majority'
        )
        const db = client.db()
        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)
        client.close()
        res.status(201).json({ message: 'Meetup inserted' })
    }
}

export default handler