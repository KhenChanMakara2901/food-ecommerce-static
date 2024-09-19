import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  console.log("Received data:", body);

  const { name, phone, date } = body;

  const booking = {
    id: new Date().getTime(), // Generate a unique ID for the booking
    name,
    phone,
    date,
    createdAt: new Date().toISOString(),
  };

  console.log("Booking received:", booking);

  // Here you could save the booking to a database or any other storage

  return NextResponse.json(
    { message: "Booking successful!", booking },
    { status: 201 }
  );
}
