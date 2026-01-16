import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("Please define the MONGODB_URI environment variable inside .env.local");
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

if (MONGODB_URI) {
    if (process.env.NODE_ENV === 'development') {
        // In development mode, use a global variable so that the value
        // is preserved across module reloads caused by HMR (Hot Module Replacement).
        if (!(global as any)._mongoClientPromise) {
            client = new MongoClient(MONGODB_URI);
            (global as any)._mongoClientPromise = client.connect();
        }
        clientPromise = (global as any)._mongoClientPromise;
    } else {
        // In production mode, it's best to not use a global variable.
        client = new MongoClient(MONGODB_URI);
        clientPromise = client.connect();
    }
}

export async function POST(req: Request) {
    // If no DB configured, simulate success for demo purposes if asked, 
    // but better to fail to warn user. However, user is asking to "make it work".
    // We cannot "make it work" without a valid connection string.
    // We will log specific errors.
    
    if (!MONGODB_URI) {
        console.error("MONGODB_URI is undefined.");
        return NextResponse.json({ error: "Server configuration error: Database URL missing." }, { status: 500 });
    }

    try {
        const body = await req.json();
        const { name, email } = body;

        console.log("Attempting to register:", { name, email });

        if (!name || !email) {
            return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
        }

        // Ensure client is connected
        let client;
        try {
            client = await clientPromise;
        } catch (connError) {
             console.error("Failed to connect to MongoDB:", connError);
             return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
        }
        
        if (!client) {
             return NextResponse.json({ error: "Database client initialization failed" }, { status: 500 });
        }

        const db = client.db("socialfly_waitlist");
        const collection = db.collection("users");

        // Check if email already exists
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Email already registered" }, { status: 409 });
        }

        const result = await collection.insertOne({
            name,
            email,
            createdAt: new Date(),
        });

        console.log("Registered successfully:", result.insertedId);
        return NextResponse.json({ message: "Success", id: result.insertedId }, { status: 200 });

    } catch (error) {
        console.error("Database error details:", error);
        // Handle JSON parse errors or other unexpected issues
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
