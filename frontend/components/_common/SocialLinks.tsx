import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { socials } from '../../data/socials';
import { media } from '../../styles';

const SocialLinksRoot = styled.ul<{ mobile?: string }>`
  display: ${(props) => (props.mobile ? 'none' : 'flex')};
  gap: 1.6rem;

  ${media.desktop} {
    display: flex;
  }
`;

const SocialLinks: FC<{ mobile?: 'hidden' }> = ({ mobile }) => {
  return (
    <SocialLinksRoot mobile={mobile}>
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
