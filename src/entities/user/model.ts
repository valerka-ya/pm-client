export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  _created_at: string;
  _updated_at: string;
}

// interafce for backend
// interface AuthSession {
//   id: string;
//   user_id: string;
//   refresh_token: string;
//   ip_address: string;
//   user_agent: string;
//   created_at: string;
//   expired_at: string;
//   is_active: string;
//   _created_at_: string;
//   _updated_at: string;
// }
