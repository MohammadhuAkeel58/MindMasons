import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newService = await prisma.service.create({ data: body });
  return NextResponse.json(newService, { status: 201 });
}
