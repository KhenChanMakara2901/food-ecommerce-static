import { NextResponse } from "next/server";
export async function POST(request) {
  const { foodName, name, address, quantity } = await request.json();
  const order = {
    id: new Date().getTime(),
    foodName,
    name,
    address,
    quantity,
    createdAt: new Date().toISOString(),
  };
  console.log("Order received:", order);
  return NextResponse.json(
    { message: "Order placed successfully!", order },
    { status: 201 }
  );
}
