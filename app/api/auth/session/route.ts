import{NextResponse}from"next/server";import{authorized}from"@/lib/auth";export async function GET(){return NextResponse.json({authenticated:await authorized()})}
