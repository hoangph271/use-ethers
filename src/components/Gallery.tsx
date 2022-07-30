import { useNft } from 'use-nft'

export const Gallery = () => {
  const { loading, nft } = useNft(
    '0x495f947276749ce646f68ac8c248420045cb7b5e',
    '4423646462015284199428233565155579013815056525886814133822154129478741131265'
  )

  return loading ? (
    <div>
      Gallery
    </div>
  ) : (
    <article>
      <h1>{nft!.name}</h1>
      <p>{nft?.description || 'N/A'}</p>
      <img src={nft?.image} width="200" />
    </article>
  )
}
