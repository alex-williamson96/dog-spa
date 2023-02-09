export interface User {
    id?: string,
    username: string,
    password: string,
    email: string,
    createdDate?: Date,
    updatedDate?: Date,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    roles: Set<string>
}