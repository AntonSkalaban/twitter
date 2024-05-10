export interface User {
  id: string;
  email: string;
  name: string;
  image: string | null;
  birth?: string | null;
  phone: string | null;
}
