// for server side rendering, use getEnv() directly
import getEnv from '@/util/getEnv';
import {ENV_PREFIX} from '@/constant';

export default function Home() {
    const env = getEnv();

    const keyName = `${ENV_PREFIX}_NAME`;
    const keyHost = `${ENV_PREFIX}_HOST`;
    const keyPort = `${ENV_PREFIX}_PORT`;
    
    return <>
        <h1>Environment: {env[keyName]?.toUpperCase()}</h1>
        <p>{keyHost}: {env[keyHost]}</p>
        <p>{keyPort}: {env[keyPort]}</p>

        <h2>All env variables</h2>
        <pre>{JSON.stringify(env, null, 4)}</pre>
    </>
}