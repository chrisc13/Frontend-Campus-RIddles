export class AuthResponse {
  id: number;
  authenticationToken: string;
  username: string;
  message: string;
  refreshToken: string;
  expiresAt: Date;
}
