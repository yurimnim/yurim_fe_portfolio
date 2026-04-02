import React from 'react';
import { AtSign, FileUser } from 'lucide-react';
import GithubIcon from '@/components/atoms/Icons/GithubIcon';
import LinkedInIcon from '@/components/atoms/Icons/LinkedIn';
import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';

interface ContactItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
  label: string;
  href?: string;
  onClick?: () => void;
}

const ContactItem = ({ Icon, label, href, onClick }: ContactItemProps) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="
      flex flex-col items-center gap-3 p-6
      text-gray-600 dark:text-gray-400
      hover:text-lime-500 dark:hover:text-lime-400
      cursor-pointer
      transition-colors duration-200
      min-w-[100px]
    "
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Icon size={32} strokeWidth={1} />
    <p className="font-mono text-sm tracking-wide">{label}</p>
  </motion.a>
);

const ContactSection = () => {
  const { t } = useLocale();

  const contactItems: ContactItemProps[] = [
    {
      Icon: AtSign,
      label: 'u007x2@me.com',
      href: 'mailto:u007x2@me.com'
    },
    {
      Icon: FileUser,
      label: t('contact.resume'),
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
    <div className="relative w-screen h-auto flex flex-col bg-slate-50 dark:bg-[#111111] pb-16 lg:pb-28 transition-colors duration-300">
      <div className="w-full flex justify-center my-12 lg:my-16">
        <span className="font-mono text-sm text-gray-400 dark:text-gray-500 tracking-wider">{'// contact'}</span>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-10 px-4">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
