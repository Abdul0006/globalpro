import PillNav from '@/components/navigation/PillNav';

export default function AboutPage() {
  const currentPage = '/about';

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
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-4">Learn more about GlobalPro and our mission.</p>
        <p className="text-lg">We are a team of experts dedicated to providing innovative digital solutions.</p>
      </main>
    </div>
  );
}