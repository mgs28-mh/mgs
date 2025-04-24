import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  (await draftMode()).disable();
  return new NextResponse("Draft mode is disabled");
}