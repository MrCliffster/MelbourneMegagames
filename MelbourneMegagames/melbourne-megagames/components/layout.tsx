import Head from "next/head";

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Melbourne Megagames</title>
                <meta name="description" content="Melbourne Megagames Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    )
}