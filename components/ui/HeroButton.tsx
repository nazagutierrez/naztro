import "./hero-button.css"

export default function HeroButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="button2" href={href}>{children}</a>

  );
}

