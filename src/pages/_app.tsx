import '@/styles/globals.scss';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityModal from '@/components/AccessibilityModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AccessibilityModal />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
