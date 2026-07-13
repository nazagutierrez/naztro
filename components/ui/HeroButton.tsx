export default function HeroButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="px-6 py-3 main-font uppercase  text-sm transition-all border border-sky-700 rounded-md hover:bg-black/80 duration-500 backdrop-blur!" href={href}>
      {children}
    </a>
  );
}

