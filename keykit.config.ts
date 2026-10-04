import { defineKeykitConfig } from '@keykithq/sdk';

export default defineKeykitConfig({
  delivery: 'static',
  projectId: process.env.KEYKIT_PROJECT_ID,
  apiKey: process.env.KEYKIT_API_KEY,
  sourceLocale: 'sv',
  defaultLocale: 'sv',
  locales: ['en', 'sv'],
  routing: 'path',
});