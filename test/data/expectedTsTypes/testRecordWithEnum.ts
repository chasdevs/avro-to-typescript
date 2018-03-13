export enum status {
    ACTIVE,
    INACTIVE,
}

export interface User {
    id: number;
    username: string;
    passwordHash: string;
    signupDate: number;
    status: status;
}
