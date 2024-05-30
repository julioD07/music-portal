export interface ResponseRegisterHttp {
    ok: boolean;
    user: User;
    message: string;
}

export interface User {
    createdAt: string;
    email: string;
    fullName: string;
    id: string;
    isActive: boolean;
    roles: Role[];
    updatedAt: string;
}

export interface Role {
    id: string;
    roleId: string;
    userId: string;
}


export interface ResponseLoginHTTP {
    ok:    boolean;
    token: string;
    user:  UserLogin;
    message?: string;
}

export interface UserLogin {
    id:       string;
    email:    string;
    fullName: string;
    roles:    string[];
}
