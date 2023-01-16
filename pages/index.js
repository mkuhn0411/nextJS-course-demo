import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {

    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Check out some meetups!"/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://melknee04:03WandWandMongo@cluster0.af3ulbx.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    //always need to return an object
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10 //# of secs nextjs waits until it regenerates the page for an incoming request, ensures your data is never older than 10 secos
    }
}

//use if you need access to the req or res object
//if you have data that changes multiple times every second
//has to be neamed getServerSideProps
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: DUMMY_MEETUPS
//     }
// }

//has to be called getStaticProps
//page will be faster because it can be cached and resused

export default HomePage;