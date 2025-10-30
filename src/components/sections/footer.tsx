import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  services: [
    { name: 'SEO Marketing', href: '#' },
    { name: 'PPC Advertising', href: '#' },
    { name: 'Social Media', href: '#' },
    { name: 'Content Marketing', href: '#' },
    { name: 'Email Marketing', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-accent pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/50 flex items-center justify-center border border-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">D</span>
                </div>
                {/* Decorative ring elements */}
                <div className="absolute -inset-1 rounded-full border border-primary/10 pointer-events-none"></div>
              </div>
              <span className="text-xl font-bold text-foreground">
                DigitalPro
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Leading digital marketing agency focused on driving growth, engagement, and measurable results for forward-thinking brands.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full bg-accent hover:bg-primary/10 border border-border"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:text-primary">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:text-primary">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Marketing Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>hello@digitalmarketingpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-10 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Subscribe to our newsletter for digital marketing insights and updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-card border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                Subscribe <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DigitalPro Marketing Agency. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}