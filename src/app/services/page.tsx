import PillNav from '@/components/navigation/PillNav';

export default function ServicesPage() {
  const currentPage = '/services';

  return (
    <div className="min-h-screen">
      <PillNav
        logo="/globe.svg"
        logoAlt="GlobalPro Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref={currentPage}
        className="custom-nav"
        ease="power2.easeOut"
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-lg mb-4">Discover the range of services we offer.</p>
        <p className="text-lg">From web development to digital marketing, we've got you covered.</p>
      </main>
    </div>
  );
}