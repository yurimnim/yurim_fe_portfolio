import React from 'react';
import { AtSign, FileUser } from 'lucide-react';
import TitleText from '@/components/atoms/TitleText';
import GithubIcon from '@/components/atoms/Icons/GithubIcon';
import LinkedInIcon from '@/components/atoms/Icons/LinkedIn';

interface ContactItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
  label: string;
  href?: string;
  onClick?: () => void;
}

const ContactItem = ({ Icon, label, href, onClick }: ContactItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className="flex flex-col items-center gap-2 p-4 hover:text-lime-500 cursor-pointer"
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
  >
    <Icon size={35} strokeWidth={1} />
    <p className="font-mono text-lg">{label}</p>
  </a>
);

const ContactSection = () => {
  const contactItems: ContactItemProps[] = [
    {
      Icon: AtSign,
      label: 'u007x2@me.com',
      href: 'mailto:u007x2@me.com'
    },
    {
      Icon: FileUser,
      label: '이력서 다운받기',
      href: 'https://drive.google.com/file/d/1UJg2ENikt2m2uSlK9l3P9mGXVlnL-HI5/view?usp=sharing'
    },
    {
      Icon: GithubIcon,
      label: 'Github',
      href: 'https://github.com/yurimnim'
    },
    {
      Icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yurim-l-83a76560/' 
    }
  ];

  return (
    <div className="relative w-screen h-auto flex flex-col bg-lime-100 pb-16 lg:pb-28">
      <div className="w-full flex justify-center my-12 lg:my-16">
        <TitleText titleText='Contact' />
      </div>
      
      <div className="w-full flex flex-wrap justify-center gap-10 px-4">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;