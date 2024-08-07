// for client side rendering, useContext(EnvContext)
"use client";
import React from "react";
import { useContext } from 'react';
import { EnvContext } from "../../provider/env";

export default function Client() {
    const env = useContext(EnvContext);

    return <>
        <h1>use client</h1>
        <pre>{JSON.stringify(env, null, 2)}</pre>
    </>
}