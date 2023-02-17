export interface User {
    userId?: string,
    username: string,
    password: string,
    email: string,
    createdDate?: Date,
    updatedDate?: Date,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    roles: Set<string>,
    stringRoles: string[],
    dogs: Set<Dog>
}

export interface Dog {
    dogId?: string,
    name: string,
    birthday: Date,
    preferredVet: string,
    emergencyContact: string,
    ownerNotes: string,
    privateNotes: string,
    medicalInformation: string,
    user: User
}
