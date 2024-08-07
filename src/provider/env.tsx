"use client";

import React, { createContext } from "react";

export const EnvContext = createContext({});

export default function EnvProvider({ children, value }:any) {
    return (
        <EnvContext.Provider value={value} >
            {children}
        </EnvContext.Provider>
    )
}