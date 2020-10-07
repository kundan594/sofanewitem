import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import  Newentry from "../../components/newEntry/Newentry"


export default function AddItem() {
  return (
    <div>
      <Layout>
          <Newentry></Newentry>
      </Layout>
    </div>
  )
}
