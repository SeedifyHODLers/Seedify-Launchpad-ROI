interface IExplorer {
    logoPathName: string
    explorerUrl: string
}

export const getExplorers = (
    contractAddress: string
): { [key: string]: IExplorer } => {
    return {
        ethereum: {
            logoPathName: 'etherscan_logo.webp',
            explorerUrl: `https://etherscan.io/token/${contractAddress}`,
        },
        polygon: {
            logoPathName: 'polygonscan_logo.webp',
            explorerUrl: `https://polygonscan.com/token/${contractAddress}`,
        },
        'binance-coin': {
            logoPathName: 'bscscan_logo.webp',
            explorerUrl: `https://bscscan.com/token/${contractAddress}`,
        },
        solana: {
            logoPathName: 'solscan_logo.png',
            explorerUrl: `https://solscan.io/token/${contractAddress}`,
        },
    }
}