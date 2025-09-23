import type { User } from "@/entities/user/model";

export const mockUser: User = {
  user_id: "user_001",
  first_name: "Valeria",
  last_name: "Developer",
  email: "valeria@example.com",
  password_hash: "$2b$10$abcdefghijk1234567890", // фейковый bcrypt-хеш
  _created_at: "2025-07-01T08:00:00Z",
  _updated_at: "2025-09-15T12:00:00Z",
};
