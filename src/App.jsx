import LoginPage from "./components/LoginPage";
import MainApp from "./components/MainApp";
import MainMessagesList from "./components/MainMessagesList";
import SideChatList from "./components/SideChatList";

export default function App() {
  return (
    <main>
      <LoginPage />
      <MainApp />
      <MainMessagesList />
      <SideChatList />
    </main>
  );
}
