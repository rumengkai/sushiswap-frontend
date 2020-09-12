import { useCallback } from 'react'

import useKbar from './useKbar'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../kbar/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const kbar = useKbar()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(kbar),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, kbar],
  )
  return { onStake: handleStake }
}

export default useStake
