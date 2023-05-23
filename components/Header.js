import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-2 px-2 text-3xl font-blog"> Decentralized Lottery</h1>
            <div className="ml-auto py-4 px-2"></div> <ConnectButton moralisAuth={false} />
        </div>
    )
}
