import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../kbar/utils'
import useKbar from './useKbar'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const kbar = useKbar()
  const farms = getFarms(kbar)
  const masterChefContract = getMasterChefContract(kbar)
  const wethContact = getWethContract(kbar)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) => {
          return getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          )
        },
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, kbar])

  useEffect(() => {
    if (account && masterChefContract && kbar) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, kbar])

  return balances
}

export default useAllStakedValue
