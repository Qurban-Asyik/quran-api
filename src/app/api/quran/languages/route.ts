import { NextResponse } from "next/server"
import { getAvailableLanguages } from "@/lib/quran-utils"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    // Construct base URL from headers, as request.url might be localhost internally
    const protocol = request.headers.get("x-forwarded-proto") || "https"
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || new URL(request.url).host
    const baseUrl = `${protocol}://${host}`

    const languages = await getAvailableLanguages(baseUrl)

    return NextResponse.json({
      languages,
    })
  } catch (error) {
    console.error("Error getting languages:", error)
    return NextResponse.json({ error: "Failed to get available languages" }, { status: 500 })
  }
}

