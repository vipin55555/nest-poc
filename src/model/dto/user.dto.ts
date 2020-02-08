export class SignUpReqDto {
    name: string;
    email: string;
    password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class SignInReqDto {
    email: string;
    password: string;
}
