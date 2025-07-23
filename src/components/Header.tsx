import Navbar from './Navbar';
import { NavLink } from '@/types/NavLink';

export default function Header() {
  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Kurse', href: '/courses' },
    { label: 'Über uns', href: '/about' },
    { label: 'Kontakt', href: '/contact' }
  ];

  return (
    <Navbar links={navLinks} />
  );
}