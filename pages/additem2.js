import Head from 'next/head'
import Layout from '../components/layout/Layout'
import ItementryData from '../components/itemEntry/ItemEntryInfo' 


export default function AddEntryItem() {
  return (
    <div>
      <Layout>
        
          <ItementryData></ItementryData>
      </Layout>
    </div>
  )
}
