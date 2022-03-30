import { Card, CardTitle, P, H2, H3, CodeBox, Link } from '@ory/themes'
import { AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '../components/header'

import { DocsButton, MarginCard, createLogoutHandler, Flow, ActionCard, CenterLink } from '../pkg'
import ory from '../pkg/sdk'

const Home: NextPage = () => {
  const [session, setSession] = useState<string>(
    'No valid Ory Session was found.\nPlease sign in to receive one.'
  )
  const [hasSession, setHasSession] = useState<boolean>(false)
  const router = useRouter()
  const onLogout = createLogoutHandler()

  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        setSession(JSON.stringify(data, null, 2))
        setHasSession(true)
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 403:
          // This is a legacy error code thrown. See code 422 for
          // more details.
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // it's second factor
            return router.push('/login?aal=aal2')
          case 401:
            // not logged in, forward them
            return router.push('/login')
        }

        // Something else happened!
        return Promise.reject(err)
      })
  })

  if (hasSession) {
    return (
      <div className={'container-fluid'}>
        <Header />

        <>
          <ActionCard>
            <Link href="https://app.innovationwithin.services">
              <CenterLink>Launch Discovery</CenterLink>
            </Link>
          </ActionCard>
          <ActionCard>
            <CenterLink data-testid="logout-link" onClick={onLogout}>
              Log out
            </CenterLink>
          </ActionCard>
        </>


      </div>
    )
  }

  return (
    <div className={'container-fluid'}>
      <Header />
      <img className="ld ld-fade" src="https://cdn.innovationwithin.com/logo%20grey.png" />
    </div>
  )
}

export default Home
