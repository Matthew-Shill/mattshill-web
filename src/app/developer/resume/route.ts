import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

const RESUME_FILENAME = "Matthew Shill Resume.pdf";

export async function GET() {
  const file = await readFile(
    join(process.cwd(), "src/app/developer/matthew-shill-resume.pdf"),
  );

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${RESUME_FILENAME}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
