import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { socials } from '../../data/socials';

const SocialLinksRoot = styled.ul`
  display: flex;
  gap: 1.6rem;
`;

const SocialLinks: FC<{}> = () => {
  return (
    <SocialLinksRoot>
      {socials.map((link) => (
        <li key={link.id}>
          <Link href={link.url} target='_blank'>
            <Image {...link.icon} alt={link.label} />
          </Link>
        </li>
      ))}
    </SocialLinksRoot>
  );
};

export default SocialLinks;
