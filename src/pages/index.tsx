import { useMediaQuery } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import UsersList from "../components/UsersList";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <Sidebar fullWidth={isMobile} />
      <ChatBox />
      <UsersList fullWidth={isMobile} />
    </Container>
  );
};

export default Home;
