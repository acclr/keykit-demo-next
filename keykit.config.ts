import { defineKeykitConfig } from '@keykithq/sdk';

export default defineKeykitConfig({
  delivery: 'static',
  projectId: process.env.KEYKIT_PROJECT_ID,
  sourceLocale: 'sv',
  defaultLocale: 'sv',
  locales: ['en', 'sv'],
  routing: 'path',
});