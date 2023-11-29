import * as dotenv from 'dotenv';

export abstract class ConfigServer {
    constructor() {
        const nodeNoneEnv = this.createPathEnv(this.nodeEnv);

        dotenv.config({
            path: nodeNoneEnv
        })
    }

    public getEnvironment(k: string): string | undefined {
        return process.env[k];
    }

    public getNumberEnvironment(k: string): number {
        return Number(this.getEnvironment(k))
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || '';
    }

    public createPathEnv(path: string): string {
        const arrEnv: Array<string> = ['env']

        if (path.length > 0 ) {
            const stringToArray = path.split('.')
            arrEnv.unshift(...stringToArray)
        }

        return '.' + arrEnv.join('.')
    }
}