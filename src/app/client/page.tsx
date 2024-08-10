// for client side rendering, useContext(EnvContext)
"use client";
import React, { useEffect} from "react";
import { useContext } from 'react';
import { EnvContext } from "../../provider/env";
import { ENV_PREFIX } from "../../constant";

export default function Client() {
    const env = useContext(EnvContext);

    useEffect(() => {
        console.log('env from window', window[ENV_PREFIX]);
    }, []);

    return <>
        <h1>use client</h1>
        <pre>{JSON.stringify(env, null, 2)}</pre>
    </>
}