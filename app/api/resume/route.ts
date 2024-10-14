import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { jobHistory, userId } = await request.json();
  
  const { data, error } = await supabase
    .from('resumes')
    .insert([{ job_history: jobHistory, user_id: userId }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  
  return NextResponse.json({ data });
}
