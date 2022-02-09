import { Header, Features, Faq } from "../components";

const HomePage = () => {
  return (
    <>
      <header className="header-bg">
        <Header />
      </header>
      <Features data-aos="fade-up" />
      <Faq />
    </>
  );
};

export default HomePage;
