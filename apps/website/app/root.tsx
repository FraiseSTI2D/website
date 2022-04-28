import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
  useCatch,
} from 'remix'
import * as React from 'react'
import { MantineProvider } from '@mantine/core'
import io from 'socket.io-client'

import globalStylesUrl from './styles/global.css'
import { API_URL } from './utils/constants'
import { SocketIoProvider } from './modules/socket.io'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: `/images/logo.png`,
      type: 'image/png',
    },
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ]
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document>
      <h1>Erreur</h1>
      <p>Status: {caught.status}</p>
      <p>{caught.statusText}</p>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div className="error-container">
        <h1>Erreur application</h1>
        <pre>{error.stack}</pre>
      </div>
    </Document>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  const socket = io(API_URL)

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          styles={{
            ActionIcon: theme => ({
              root: {
                color: '#fff',
                transition: '0.7s',
                '&:hover': {
                  color: 'black',
                  background: theme.colors.gray[1],
                },
              },
            }),
            Anchor: theme => ({
              root: {
                display: 'block',
                lineHeight: 1,
                padding: '8px 12px',
                borderRadius: theme.radius.sm,
                textDecoration: 'none',
                fontSize: theme.fontSizes.sm,
                fontWeight: 500,
              },
            }),
          }}
        >
          <SocketIoProvider client={socket}>{children}</SocketIoProvider>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}
