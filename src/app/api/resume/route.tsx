import { NextRequest, NextResponse } from 'next/server'
import { pdf } from '@react-pdf/renderer'
import { ResumePDF } from '@/components/resume-pdf'

export async function GET(request: NextRequest) {
  try {
    // Generate the PDF
    const blob = await pdf(<ResumePDF />).toBlob()

    // Convert blob to buffer
    const buffer = await blob.arrayBuffer()

    // Return the PDF with appropriate headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Swakhar_Dey_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF resume' },
      { status: 500 }
    )
  }
}
