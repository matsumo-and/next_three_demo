import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import styles from '../styles/Home.module.css'
import { countAtom, countSelector } from './model/countState'

const Top: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <body>
        <div>
          bbb
          <Counter />
        </div>
      </body>
    </div>
  )
}

const Counter = () => {
  const [countValue, countSet] = useRecoilState(countAtom)
  return (
    <>
      <div>{countValue}</div>
      <button onClick={() => countSet(countValue + 1)}>aaa</button>
    </>
  )
}

export default Top
