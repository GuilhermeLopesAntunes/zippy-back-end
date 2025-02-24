export class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'STUDENT' | 'TEACHER';
    classroom: string;
    level: number;
    score: number;
    coins: number;
    items: string[]; 
    trophies: { 
        id: number; 
        name: string; 
        description: string 
    }[]; 
}