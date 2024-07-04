import { Link } from "react-router-dom";

interface LogoProps {
  src?: string;
  href?: string;
  disableLink?: boolean;
}

export const Logo = (props: LogoProps) => {
  const {disableLink = false, src, href} = props;

  const logo = (
      <img alt="logo" src={src || '/logo/logo.svg'}/>
  );

  if (disableLink) {
    return <>{logo}</>;
  }

  return <Link to={href || '/'}>{logo}</Link>;
}
