import { NextRequest, NextResponse } from 'next/server';
import Speaker from '@/lib/models/Speaker';
import connectDB from '@/lib/database';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const { id } = await params;
    const speaker = await Speaker.findByIdAndDelete(id);
    
    if (!speaker) {
      return NextResponse.json(
        { success: false, error: 'Speaker not found' },
        { status: 404 }
      );
    }
    
    // TODO: Delete image from Cloudinary if needed
    
    return NextResponse.json({ 
      success: true, 
      message: 'Speaker deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting speaker:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete speaker' },
      { status: 500 }
    );
  }
}
