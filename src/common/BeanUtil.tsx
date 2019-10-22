export default class BeanUtil {
    static copy(source: any, dest: any){
        console.log(source)
        console.log(dest)
        for (let key in dest) {
            if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
}