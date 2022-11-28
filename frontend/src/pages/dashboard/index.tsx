import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from 'next/head'
import Header from "../../components/Header"

export default function Dashboard(){
    return(
        <>
            <Head>
                <div>
                    <h1>Bem vindo Ao painel</h1>
                </div>
            </Head>
            <div>
                <Header/>
                <h1></h1>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props:{}
    }
})