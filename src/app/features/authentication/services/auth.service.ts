import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { User } from '../../../core/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private supabaseService: SupabaseService) { }

  async register(user: User) {
    let { data, error } = await this.supabaseService.client.auth.signUp({
      email: user.email,
      password: user.password
    })
    console.log(data)
  }

  async login(user: User) {
    let { data, error } = await this.supabaseService.client.auth.signInWithPassword({
      email: user.email,
      password: user.password
    })
    console.log(data)
  }


}
