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

  // Track whether the NFT is equipped or not
  const [equippedNfts, setEquippedNfts] = useState<Set<string>>(new Set());

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

  const toggleEquip = (nftId: string) => {
    setEquippedNfts((prev) => {
      const newEquipped = new Set(prev);
      if (newEquipped.has(nftId)) {
        newEquipped.delete(nftId); // Unequip if already equipped
      } else {
        newEquipped.add(nftId); // Equip if not equipped
      }
      return newEquipped;
    });
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
              Connect your wallet and select a chain to view collections.
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
                    className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 flex flex-col items-center"
                  >
                    <img
                      src={nft.imageUrl}
                      alt={nft.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <p className="text-white mt-2">{nft.name}</p>
                    <button
                      onClick={() => toggleEquip(nft.id)}
                      className={`mt-4 py-2 px-8 w-full ${
                        equippedNfts.has(nft.id)
                          ? "bg-black border-2 border-[#fd01f5] text-[#fd01f5] hover:bg-gray-800"
                          : "bg-[#fd01f5] text-white hover:bg-[#fd01d0]"
                      } rounded`}
                    >
                      {equippedNfts.has(nft.id) ? "Unequip" : "Equip"}
                    </button>
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
