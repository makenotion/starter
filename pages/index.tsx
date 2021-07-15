import Head from "next/head"
import styles from "../styles/Home.module.css"
import { block } from "./data"

export default function Home() {
    return (
        <pre>
            <code>{JSON.stringify(block, null, 2)}</code>
        </pre>
    )
}
