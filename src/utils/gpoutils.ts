import { ethers } from 'ethers';

// Define the GPO contract ABI, including the totalSupply and approve methods
const gpoAbi = [
  "function totalSupply() view returns (uint256)",
  "function approve(address spender, uint256 amount) public returns (bool)"
];

// Define GPO contract addresses for each chain
export const gpoAddresses: { [key: number]: string } = {
  8453: "0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99",
  10: "0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275",
  137: "0x1FD729f324B6FDd4F12464f970b587139B24b005",
  42161: "0xA49794ffA36f26C403000d1F2A501c5A78Db6b47",
  33139: "0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4"
};

// Function to get total supply from GPO contract for a given chain
export const getTotalSupply = async (chainId: number, providerUrl: string): Promise<ethers.BigNumberish> => {
  const gpoAddress = gpoAddresses[chainId];
  if (!gpoAddress) {
    throw new Error(`GPO address not found for chain ID ${chainId}`);
  }

  // Create a provider instance using ethers v6
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // Create a contract instance with the provider
  const contract = new ethers.Contract(gpoAddress, gpoAbi, provider);

  // Call totalSupply method and return the result
  const totalSupply = await contract.totalSupply();
  return totalSupply;
};

// Function to approve spender to transfer tokens from GPO contract
export const approveSpender = async (
  chainId: number,
  providerUrl: string,
  spender: string,
  amount: ethers.BigNumberish,
  signer: ethers.Signer
) => {
  const gpoAddress = gpoAddresses[chainId];
  if (!gpoAddress) {
    throw new Error(`GPO address not found for chain ID ${chainId}`);
  }

  // Create a provider instance to use with the signer
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // Explicitly pass the provider and signer together to the contract
  const contract = new ethers.Contract(gpoAddress, gpoAbi, provider).connect(signer);

  // Fix: cast the contract to the correct type that includes the approve method
  const txResponse = await (contract as ethers.Contract).approve(spender, amount);

  // Wait for the transaction to be mined
  await txResponse.wait(); // Now wait() is correctly called on the TransactionResponse

  console.log(`Approved spender: ${spender} with amount: ${amount}`);
};
