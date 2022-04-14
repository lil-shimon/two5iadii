import type { GetServerSideProps, NextPage } from "next";
import prisma from "../lib/prisma";
import styles from '../styles/Home.module.css'

interface Props {
    count: number
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const count = await prisma.user.count()
    return {
        props: {
            count
        }
    }
}

const Home: NextPage<Props> = ({ count }) => {
    return (
        <div className={styles.container}>
            <h1>{` User Count: ${count}`}</h1>
        </div>
    )
}

export default Home