import { NextResponse } from "next/server";
import { getCountries } from "@/app/lib/api";

export async function GET() {
  try {
    const countries = await getCountries();
    return NextResponse.json({ response: countries });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}
