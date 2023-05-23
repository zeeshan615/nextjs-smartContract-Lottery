import Head from "next/head"
import Image from "next/image"
//import ManualHeader from "@/components/ManualHeader"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { StrictMode } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart Contract Lottery</title>
            </Head>
            <Header />
            
            <LotteryEntrance />
            {/* <ManualHeader /> */}
        </>
    )
}
