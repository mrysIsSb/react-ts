/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import axios from 'axios';
import { message } from 'antd';

interface IFRequestParam {
    url: string;
    msg?: string;
    config?: any;
    data?: any;
}
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({ url, msg = '接口异常', config }: IFRequestParam) =>
    axios
        .get(url, config)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            message.warn(msg);
        });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', config }: IFRequestParam) =>
    axios
        .post(url, data, config)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            message.warn(msg);
        });

interface RequestData {
    url: string;
    headers?: any;
    params?: any;
    body?: any;
    success?:(res:any)=>{};
    exMsg?: string;
}
const ex_msg = '接口异常'

export const GET = ({ url, params,success=res => res.data, exMsg = ex_msg }: RequestData) =>
    axios.get(url, {
        params: params
    }).then(success)
        .catch(err => {
            console.log(err);
            message.warn(exMsg);
        });

export const POST = ({ url, params, body,success=res => res.data, exMsg = ex_msg}: RequestData) =>
    axios.post(url, body, {
        params: params
    }).then(success)
        .catch(err => {
            console.log(err);
            message.warn(exMsg);
        }); 