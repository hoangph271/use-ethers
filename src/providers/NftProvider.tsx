import { getDefaultProvider } from 'ethers'
import { FC, ReactNode } from 'react'
import { NftProvider } from 'use-nft'

// type NftContextValue = {
//   provider: ethers.providers.Web3Provider,
// }
// const NftContext = createContext<NftContextValue | null>(null)

export const AppNftProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)

  // useEffect(() => {
  //   const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  //   provider.send('eth_requestAccounts', [])
  //     .then(() => {
  //       setProvider(provider)
  //     })
  // }, [])

  return (
    <NftProvider fetcher={['ethers', { provider: getDefaultProvider('homestead') }]}>
      {children}
    </NftProvider>
  )
}
