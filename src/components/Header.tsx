import NavbarRight from './NavbarRight';
import { NavLink } from '@/types/NavLink';

type HeaderProps = {
    navLinks?: NavLink[];
    transparentNav?: boolean; // if true, adds padding to the top of the content
};

export default function Header({navLinks=[], transparentNav=false}: HeaderProps) {
  return (
    <NavbarRight navLinks={navLinks} transparentNav={transparentNav}/>
  );
}