
export enum Role {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
  }
  
  export class Trophy {
    id: number;
    name: string;
    description: string;
  }

export class UserEntity {
    id: number;
    username: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    classroom: string; 
    level: number;
    score: number;
    coins: number;
    items: string[];
    trophies: Trophy[];
}