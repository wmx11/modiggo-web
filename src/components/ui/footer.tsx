import Container from "./container";
import { renderFooterMenu } from "./navigation";
import Title from "./title";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm [&_ul]:space-y-2 [&_h4]:mb-4 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          {renderFooterMenu()}
          <div>
            <Title order={4}>Find us</Title>
            <ul>
              <li>Švitrigailos g. 11K-109</li>
              <li>Vilnius, Lithuania</li>
              <li>
                <a href="mailto:info@modiggo.com">info@modiggo.com</a>
              </li>
              <li>+370 608 19349</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="space-x-4 text-xs">
            <span className="space-x-2">
              <span>@ {new Date().getFullYear()}</span>
              <span>Modiggo</span>
            </span>
            <span>All rights reserved</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
