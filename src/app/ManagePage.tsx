import React, { useEffect, useState } from "react";
import { Chain } from "../utils/chains";

interface Collection {
  name: string;
  address: string;
}

interface NFT {
  id: string;
  imageUrl: string;
  name: string;
}

const ManagePage: React.FC<{ selectedChain: Chain | null }> = ({ selectedChain }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [nfts, setNfts] = useState<NFT[]>([]);

  const mockCollections: Collection[] = [
    { name: "Cool NFT Collection", address: "0x1234...abcd" },
    { name: "Rare NFT Collection", address: "0x5678...efgh" },
  ];

  const mockNFTs: NFT[] = [
    { id: "1", imageUrl: "/nft1.png", name: "NFT #1" },
    { id: "2", imageUrl: "/nft2.png", name: "NFT #2" },
    { id: "3", imageUrl: "/nft3.png", name: "NFT #3" },
  ];

  const connectWallet = async () => {
    if (window.ethereum && typeof window.ethereum.request === "function") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("MetaMask is not installed or Ethereum provider is unavailable.");
    }
  };

  const fetchCollections = async () => {
    if (selectedChain) {
      setCollections(mockCollections); // Replace with chain-specific logic if needed
    }
  };

  const fetchNFTs = async (collection: Collection) => {
    const filteredNFTs = mockNFTs.filter((nft) => nft.id.startsWith(collection.address[2]));
    setNfts(filteredNFTs);
  };

  useEffect(() => {
    if (selectedChain) {
      connectWallet();
      fetchCollections();
    }
  }, [selectedChain]);

  useEffect(() => {
    if (selectedCollection) {
      fetchNFTs(selectedCollection);
    }
  }, [selectedCollection]);

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">
        Manage your Agent Core Brain
      </h1>
      <p className="text-3xl text-accent1 mt-4">
        Turn any NFT into a Smart NFT by Equipping an ISAI Core Brain
      </p>

      <div className="flex mt-8">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-4 rounded shadow-lg">
          {account ? (
            <>
              <h3 className="text-xl text-white mb-4">Your Collections</h3>
              <ul className="space-y-4">
                {collections.map((collection) => (
                  <li
                    key={collection.address}
                    onClick={() => setSelectedCollection(collection)}
                    className={`cursor-pointer p-4 rounded shadow ${
                      selectedCollection?.address === collection.address
                        ? "bg-[#fd01f5] text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {collection.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-white">
              Connect your wallet to view collections.
            </p>
          )}
        </div>

        {/* NFT Display */}
        <div className="w-3/4 bg-gray-900 p-8 rounded shadow-lg ml-4">
          {account && selectedCollection ? (
            <>
              <h3 className="text-xl text-white mb-6">
                NFTs in {selectedCollection.name}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {nfts.map((nft) => (
                  <div
                    key={nft.id}
                    className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700"
                  >
                    <img
                      src={nft.imageUrl}
                      alt={nft.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <p className="text-white mt-2">{nft.name}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-400">
              {account ? "Select a collection to view its NFTs." : "Sign in to view your NFT collections."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManagePage;
