import { NextRequest, NextResponse } from 'next/server';
import Speaker from '@/lib/models/Speaker';
import cloudinary from '@/lib/cloudinary';
import connectDB from '@/lib/database';

export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const speakers = await Speaker.find().sort({ createdAt: -1 });
    console.log('Fetched speakers:', speakers);
    
    return NextResponse.json({ success: true, data: speakers });
  } catch (error) {
    console.error('Error fetching speakers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch speakers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const organization = formData.get('organization') as string;
    const image = formData.get('image') as File;
    
    if (!name || !role || !organization || !image) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Upload image to Cloudinary
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: 'speakers',
          resource_type: 'image'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
    
    const imageUrl = (result as any).secure_url;
    
    // Create speaker
    const speaker = await Speaker.create({
      name,
      role,
      organization,
      imageUrl
    });
    
    return NextResponse.json({ 
      success: true, 
      data: speaker,
      message: 'Speaker added successfully'
    });
    
  } catch (error) {
    console.error('Error adding speaker:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add speaker' },
      { status: 500 }
    );
  }
}
