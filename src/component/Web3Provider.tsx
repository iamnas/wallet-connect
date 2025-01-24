import { WagmiProvider, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


const config = createConfig(
    getDefaultConfig({
        chains: [sepolia],
        walletConnectProjectId: import.meta.env.VITE_PROJECT_ID || '',
        appName: "Wagmi",

    }),
);


const queryClient = new QueryClient();

export const Web3Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <ConnectKitProvider>
                    
                    {children}
                </ConnectKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};