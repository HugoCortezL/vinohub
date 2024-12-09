import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private static supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: false,
    }
  });

  get client() {
    return SupabaseService.supabase;
  }
}
