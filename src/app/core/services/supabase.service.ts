import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private static supabase = createClient(process.env['SUPABASE_URL'] ?? environment.supabaseUrl, process.env['SUPABASE_ANON_KEY'] ?? environment.supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: false,
    }
  });

  get client() {
    return SupabaseService.supabase;
  }
}
