export interface Foo {
    label: string;
}

export interface EmailAddress {
    address: string;
    verified: boolean;
    dateAdded: number;
}

export enum status {
    ACTIVE,
    INACTIVE,
}

export interface User {
    id: number;
    username: string;
    passwordHash: string;
    signupDate: number;
    mapField: { [index: string]: Foo };
    emailAddresses: EmailAddress[];
    status: status;
}
