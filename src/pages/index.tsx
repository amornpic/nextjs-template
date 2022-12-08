import BlankLayout from '../components/layouts/BlankLayout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>
}

export default Page
