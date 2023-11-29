import Link from 'next/link';
import { navItems } from '@/data';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8'>
        {navItems.map((item, idx) => {
          return (
            <Link key={idx} href={item.href} className='hover:text-primary-200'>
              {item.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
