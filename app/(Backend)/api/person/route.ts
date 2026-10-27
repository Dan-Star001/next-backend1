import { NextResponse } from "next/server";
import connectToDatabase  from "../../services/mongodb";
import Person from "../../models/Person";

// export function GET() {
//     const person = [
//         {
//             id: 1,
//             name: "John Doe",
//             age: 30,
//             email: "john.doe@example.com"
//         },
//         {
//             id: 2,  
//             name: "Jane Smith",
//             age: 25,
//             email: "jane.smith@example.com"
//         },
//         {
//             id: 3,
//             name: "Bob Johnson",
//             age: 35,
//             email: "bob.johnson@example.com"
//         },
//         {
//             id: 4,
//             name: "Alice Williams",
//             age: 28,    
//             email: "alice.williams@example.com"
//         },
//         {
//             id: 5,
//             name: "Michael Brown",
//             age: 40,
//             email: "michael.brown@example.com"
//         }
//     ];

//     return Response.json(person)
// }




export async function POST(request: Request) {
  await connectToDatabase();

  const data = await request.json();

  const person = await Person.create(data);

  return NextResponse.json(person, { status: 201 });
}

export async function GET() {
  try {
    await connectToDatabase();

    const data = await Person.find();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to load persons:", error);

    return NextResponse.json(
      { error: "Unable to connect to the database" },
      { status: 503 },
    );
  }
}
