import NavbarRight from './NavbarRight';
import { NavLink } from '@/types/NavLink';

export default function Header() {
  const navLinks: NavLink[] = [
    { label: 'Kurse', href: '/courses' },
    { label: 'Über uns', href: '/about' },
    { label: '0931 / 730 40 586', href: 'tel:+4993173040586' }
  ];

  return (
    <NavbarRight links={navLinks} />
  );
}