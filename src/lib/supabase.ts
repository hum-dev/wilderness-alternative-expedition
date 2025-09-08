import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xdnqntsiphpyafdciank.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkbnFudHNpcGhweWFmZGNpYW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzgwODYsImV4cCI6MjA3MjgxNDA4Nn0.qYbHxKgD40kbtetUhotPkv80voA0frhWV1daMN9woCE'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types
export type User = {
  id: string
  email: string
  user_metadata?: {
    role?: string
  }
}