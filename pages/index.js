import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Table from "../components/table/Table";
import DisplayInfo  from "../components/cardDisplay/DisplayInfo"


export default function Home() {
  return (
    <div>
      <Layout>
        {/* <Table></Table> */}
        <DisplayInfo></DisplayInfo>
      </Layout>
    </div>
  )
}
