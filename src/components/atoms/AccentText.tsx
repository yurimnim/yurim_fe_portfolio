interface AccentTextProps {
  children: React.ReactNode;
}

const AccentText = ({ children }: AccentTextProps) => (
  <span className="text-lime-500 dark:text-lime-400 font-medium">
    {children}
  </span>
);

export default AccentText;
