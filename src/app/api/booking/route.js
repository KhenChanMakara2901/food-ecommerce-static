import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log("Received data:", body);
  const { name, phone, date } = body;
  const booking = {
    id: new Date().getTime(),
    name,
    phone,
    date,
    createdAt: new Date().toISOString(),
  };
  console.log("Booking received:", booking);
  return NextResponse.json(
    { message: "Booking successful!", booking },
    { status: 201 }
  );
}
