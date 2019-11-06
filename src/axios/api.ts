import { GET, POST } from './tools';
import * as path from './apiPath';
import { url } from 'inspector';

export interface loginDTO {
    username: string;
    password: string;
}
export const login = (data: loginDTO, success: any) => POST({ url: path.loginUrl, body: data, success: success });

export const homePage = () => GET({ url: path.homePage })