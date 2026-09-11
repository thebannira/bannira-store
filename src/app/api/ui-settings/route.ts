import { NextResponse } from "next/server";
import UISetting from "@/models/UISetting";
import { connectDB } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const settings = await UISetting.findOne({}).lean();
    
    return NextResponse.json(
      { success: true, heroBanners: settings?.heroBanners || [] },
      { 
        headers: {
          "Cache-Control": "no-store, max-age=0",
        } 
      }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, heroBanners: [] }, { status: 500 });
  }
}