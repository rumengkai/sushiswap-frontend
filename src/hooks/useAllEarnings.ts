import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../kbar/utils'
import useKbar from './useKbar'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const kbar = useKbar()
  const farms = getFarms(kbar)
  const masterChefContract = getMasterChefContract(kbar)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, kbar])

  useEffect(() => {
    if (account && masterChefContract && kbar) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, kbar])

  return balances
}

export default useAllEarnings
