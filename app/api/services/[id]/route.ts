import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const body = await req.json();

  const updated = await prisma.service.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  await prisma.service.delete({ where: { id } });

  return new Response("Deleted", { status: 200 });
}
