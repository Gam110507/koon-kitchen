import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const reservationSchema = z.object({
  date: z.string(),
  time: z.string(),
  guests: z.coerce.number().min(1).max(20),
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  notes: z.string().optional(),
});

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "reservations.json");

async function readReservations() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeReservation(data: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const reservations = await readReservations();
  reservations.push(data);
  await fs.writeFile(DATA_FILE, JSON.stringify(reservations, null, 2));
}

// TODO: Resend email integration (lazy init pattern)
// import { Resend } from "resend";
// let resend: Resend | null = null;
// function getResend() {
//   if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
//   return resend;
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = reservationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const reservation = {
      id: crypto.randomUUID(),
      ...result.data,
      createdAt: new Date().toISOString(),
    };

    await writeReservation(reservation);

    // TODO: Send confirmation email via Resend
    // const resend = getResend();
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true, reservation }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const reservations = await readReservations();
    return NextResponse.json({ success: true, reservations }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to read reservations" },
      { status: 500 }
    );
  }
}