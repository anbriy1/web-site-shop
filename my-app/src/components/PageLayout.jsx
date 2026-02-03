import Header from './Header';
import Footer from './footer';

export default function PageLayout({ children }) {
  return (
    <div className='full'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
