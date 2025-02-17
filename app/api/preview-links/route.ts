import { NextResponse } from 'next/server';

const corsInitOptions = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

const baseUrl = process.env.VERCEL_BRANCH_URL
? // Vercel auto-populates this environment variable
  `https://${process.env.VERCEL_BRANCH_URL}`
: // Netlify auto-populates this environment variable
  process.env.URL;

/*
  This endpoint is for the Web Previews DatoCMS plugin:
  https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews

  After installing the plugin on the project, insert the following frontend settings:

  Name: Production Website
  URL: <YOUR_WEBSITE>/api/preview-links
*/

export async function OPTIONS(request: Request) {
  return NextResponse.json(
    { success: true },
    corsInitOptions,
  );
}

export async function POST(request: Request) {
  const previewLinks = [
    {
      label: 'Published version',
      url: `${baseUrl}/api/exit-draft`,
    },
    {
      label: 'Draft version',
      url: `${baseUrl}/api/draft?secret=${
        process.env.NEXT_DATOCMS_DRAFT_SECRET || ''
      }`,
    },
  ];

  return NextResponse.json({ previewLinks }, corsInitOptions);
};