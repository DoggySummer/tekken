import { MongoClient } from 'mongodb'

export async function GET(request: Request) {
  const uri = process.env.MONGODB ?? ''
  const options = {}
  const { searchParams } = new URL(request.url)
  const character = searchParams.get('character')
  console.log(uri)
  try {
    const client = new MongoClient(uri, options)
    console.log('Connecting to MongoDB...')
    await client.connect()
    const db = client.db('tekken_database')
    console.log('Connected to database:', db.databaseName)

    const collection = db.collection('tekken_skill')
    console.log('Accessing collection:', collection.collectionName)

    const data = await collection.find({ character_name: character }).toArray()
    console.log('Retrieved data count:', data.length)

    await client.close()

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
