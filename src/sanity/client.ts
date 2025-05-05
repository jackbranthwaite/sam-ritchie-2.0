import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'q0kxjat7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
