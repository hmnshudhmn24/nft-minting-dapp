
import React, { useState } from "react";
import { ethers } from "ethers";
import NFTMintABI from "./NFTMint.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [tokenURI, setTokenURI] = useState("");

    async function connectWallet() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
            const nftContract = new ethers.Contract(CONTRACT_ADDRESS, NFTMintABI.abi, signer);
            setContract(nftContract);
        } else {
            alert("Please install MetaMask!");
        }
    }

    async function mintNFT() {
        if (!contract || !tokenURI) return;
        try {
            const tx = await contract.mintNFT(account, tokenURI);
            await tx.wait();
            alert("NFT Minted Successfully!");
        } catch (error) {
            console.error("Minting failed:", error);
        }
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">NFT Minting Dapp</h1>
            {!account ? (
                <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
                    Connect Wallet
                </button>
            ) : (
                <div>
                    <input 
                        type="text" 
                        value={tokenURI} 
                        onChange={(e) => setTokenURI(e.target.value)} 
                        placeholder="Enter Token URI" 
                        className="border p-2 rounded w-full mb-2" 
                    />
                    <button onClick={mintNFT} className="bg-green-500 text-white p-2 rounded w-full">
                        Mint NFT
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
