import { NextRequest, NextResponse } from 'next/server';
import TeamMember from '@/lib/models/TeamMember';
import cloudinary from '@/lib/cloudinary';
import connectDB from '@/lib/database';

export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const teamMembers = await TeamMember.find().sort({ createdAt: -1 });
    console.log('Fetched team members:', teamMembers);
    
    return NextResponse.json({ success: true, data: teamMembers });
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch team members' },
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
    const email = formData.get('email') as string;
    const linkedinUrl = formData.get('linkedinUrl') as string;
    const image = formData.get('image') as File;
    
    if (!name || !role || !email || !image) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }
    
    // Upload image to Cloudinary
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: 'team',
          resource_type: 'image'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
    
    const imageUrl = (result as any).secure_url;
    
    // Create team member
    const teamMember = await TeamMember.create({
      name,
      role,
      email,
      linkedinUrl: linkedinUrl || '',
      imageUrl
    });
    
    return NextResponse.json({ 
      success: true, 
      data: teamMember,
      message: 'Team member added successfully'
    });
    
  } catch (error) {
    console.error('Error adding team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add team member' },
      { status: 500 }
    );
  }
}
