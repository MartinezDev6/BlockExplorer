import { ethers } from 'ethers'

const INFURA_PROJECT_ID = 'your-infura-project-id'
const RPC_URL = `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`

export const provider = new ethers.JsonRpcProvider(RPC_URL)

export const isValidAddress = (address: string): boolean => {
  try {
    return ethers.isAddress(address)
  } catch {
    return false
  }
}

export const isValidTransactionHash = (hash: string): boolean => {
  return /^0x[a-fA-F0-9]{64}$/.test(hash)
}

export const isValidBlockNumber = (input: string): boolean => {
  return /^\d+$/.test(input)
}

export const formatEther = (weiValue: string): string => {
  return ethers.formatEther(weiValue)
}

export const formatAddress = (address: string): string => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}