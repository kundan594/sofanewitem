import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Table from "../components/table/Table";


export default function Home() {
  return (
    <div>
      <Layout>
        <Table></Table>
      </Layout>
    </div>
  )
}