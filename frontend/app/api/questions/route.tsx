export async function GET() {
  const res = await fetch("http://127.0.0.1:5000/questions", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await res.json();

  return Response.json({ data });
}
