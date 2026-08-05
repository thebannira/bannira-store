import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from "@/lib/mongodb";
import UISetting from '@/models/UISetting';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    let settings = await UISetting.findOne({});
    
    if (!settings) {
      settings = await UISetting.create({
        topStripText: [
          "FREE SHIPPING ON ALL ORDERS ABOVE ₹4999",
          "FLAT 10% OFF ON YOUR FIRST PURCHASE | USE CODE: BANNIRA10"
        ],
        discountCode: "BANNIRA10",
        discountValue: 10,
        shippingCost: 150,
        gstPercentage: 18,
        heroBanners: [],
        featuredProductIds: [],
        coupons: []
      });
    }
    
    return NextResponse.json({ success: true, data: settings }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { 
      topStripText, 
      discountCode, 
      discountValue, 
      heroBanners, 
      featuredProductIds, 
      shippingCost, 
      gstPercentage 
    } = body;

    const settings = await UISetting.findOneAndUpdate(
      {},
      {
        topStripText,
        discountCode,
        discountValue,
        heroBanners,
        featuredProductIds,
        shippingCost,
        gstPercentage
      },
      { new: true, upsert: true, runValidators: true }
    );

    return NextResponse.json({ success: true, data: settings }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}