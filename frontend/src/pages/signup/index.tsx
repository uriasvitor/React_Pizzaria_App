import Button from '../../components/ui/Button/Index'; 
import Input from '../../components/ui/Input'; 
import Head from 'next/head';
import logo_img from   '../../../public/logo.svg'
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link'


export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sujeito Homem - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo_img} alt="Logo Sujeito Pizzaria"></Image>

        <div className={styles.login}>
          <h1>Criar conta</h1>


          <form>
            <Input
              placeholder='Digite seu nome'
              type='text'
            />

            <Input
              placeholder='Digite seu email'
              type='email'
            />

            <Input
              placeholder='Digite sua Senha'
              type='password'
            />

            <Button
              type="submit"
              loading={false}
            >
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça o Login!</a>
            </Link>
        </div>
      </div>

    </>
  )
}
