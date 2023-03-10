import type { MetaFunction } from '@remix-run/node';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import styles from './tailwind.css';
import { ErrorBoundaryProps } from './types/types';
import BaseHeader from './components/BaseHeader';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'News',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <body>
        <BaseHeader />
        <section className='error-message'>
          <h1 className='text-center w-[350px] sm:w-[450px] lg:w-[550px]'>
            Something went wrong during fetching a news feed{' '}
          </h1>
          <p className='text-center w-[350px] sm:w-[450px] lg:w-[550px]'>
            Please, try again later
          </p>
        </section>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
