import { FormEvent, useContext, useState } from 'react';
import Button from '../components/ui/Button/Index';
import Input from '../components/ui/Input';
import Head from 'next/head';
import logo_img from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import {AuthContext} from '../contexts/AuthContext'
import { toast } from 'react-toastify';
import { GetServerSideProps } from 'next';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    if(email == '' || password === ''){
      toast.warn("Por favor, preencha os campos.")
      return;
    }
    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)
    setLoading(false)
  }
  return (
    <>
      <Head>
        <title>Suejeito Homem</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo_img} alt="Logo Sujeito Pizzaria"></Image>

        <div className={styles.login}>

        <h1>Fazer login</h1>

          <form onSubmit={handleLogin}>
            <Input
              placeholder='Digite seu email'
              type='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <Input
              placeholder='Digite sua Senha'
              type='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
            </Link>
        </div>
      </div>

    </>
  )
}


export const getServerSideProps =  canSSRGuest(async (ctx)=>{
  return {
    props:{}
  }
})
