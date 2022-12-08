import DashboardLayout from '../../components/layouts/Dashboard/Dashboard'
import { NextPageWithLayout } from '../_app'

const AccountSettings: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <p>AccountSettings</p>
      </section>
    </>
  )
}

export default AccountSettings

AccountSettings.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
