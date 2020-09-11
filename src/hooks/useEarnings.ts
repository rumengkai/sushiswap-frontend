import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../kbar/utils'
import useKbar from './useKbar'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const kbar = useKbar()
  const masterChefContract = getMasterChefContract(kbar)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, kbar])

  useEffect(() => {
    if (account && masterChefContract && kbar) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, kbar])

  return balance
}

export default useEarnings
