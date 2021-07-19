import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
    href: string;
    as: string;
    onClick?: (event: Event) => void;
    children?: string | React.ReactNode;
}

const NavLink = ({ href, as, onClick, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <Link href={href} as={as} passHref>
      {children}
    </Link>
  ); 
};

export default NavLink; 