export interface User{
    id: number | null;
    name?: string | undefined;
    position?: string;
    department?: string;
    details?:{
    role: string | undefined;
    }
  }