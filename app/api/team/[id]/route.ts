import { NextRequest, NextResponse } from 'next/server';
import TeamMember from '@/lib/models/TeamMember';
import connectDB from '@/lib/database';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Connect to MongoDB
    await connectDB();
    
    const { id } = await params;
    const teamMember = await TeamMember.findByIdAndDelete(id);
    
    if (!teamMember) {
      return NextResponse.json(
        { success: false, error: 'Team member not found' },
        { status: 404 }
      );
    }
    
    // TODO: Delete image from Cloudinary if needed
    
    return NextResponse.json({ 
      success: true, 
      message: 'Team member deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
