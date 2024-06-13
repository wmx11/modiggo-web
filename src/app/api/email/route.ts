import rateLimit from "@/lib/rate-limit";

export async function POST() {
  try {
    return Response.json({ data: "this is a test" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    rateLimit();
    return Response.json({ data: "this is a test" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
