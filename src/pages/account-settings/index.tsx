import DashboardLayout from '../../components/layouts/Dashboard/Dashboard'
import { NextPageWithLayout } from '../_app'
import { useUser } from '@auth0/nextjs-auth0/client'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const AccountSettings: NextPageWithLayout = () => {
  const { user, error, isLoading } = useUser()
  return (
    <>
      <section>
        <p>AccountSettings</p>
      </section>

      {isLoading && <p>Loading profile...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Profile</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </>
  )
}

export default AccountSettings

AccountSettings.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export const getServerSideProps = withPageAuthRequired()
