import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '../../components/layouts/Dashboard/Dashboard'
import { NextPageWithLayout } from '../_app'

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <p>Dashboard page</p>
    </>
  )
}

export default Dashboard

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export const getServerSideProps = withPageAuthRequired()
