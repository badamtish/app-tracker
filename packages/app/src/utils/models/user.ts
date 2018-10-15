export interface IUser {
    name: string;
    email: string;
    picture: string;
    sub: string;
    iss: string;
    aud: string;
    exp: number;
    iat: number;
    at_hash: string;
    nickname: string;
    nonce: string;
}