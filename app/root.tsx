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
  console.log(error);
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <body>
        <BaseHeader />
        <h1 className='sm:w-[100%] w-[350px] text-center'>
          Something went wrong during fetching a news feed
        </h1>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
