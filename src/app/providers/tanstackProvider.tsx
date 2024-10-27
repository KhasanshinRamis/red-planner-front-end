"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export const TanstackProvider = ({ children }: PropsWithChildren) => {
    const [queryCLient] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                },
            },
        })
    );
    return (
        <QueryClientProvider client={queryCLient}>
            {children}
            <Toaster 
				theme='dark'
				position='bottom-right'
				duration={1500}
				
			/>
        </QueryClientProvider>
    );
};
