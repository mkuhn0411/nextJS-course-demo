import { MongoClient } from 'mongodb';

//all this code runs server-side
async function handler(req, res) {
    console.log("try")
    if (req.method === 'POST') {   
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://melknee04:03WandWandMongo@cluster0.af3ulbx.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        client.close();
        res.status(201).json({ message: 'Meetup added!' });

    }
}

export default handler;