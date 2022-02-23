import { StatusBar } from "expo-status-bar";
import AuthenticateBTN from "./components/Authenticate.js";

export default function App() {
  return (
    <>
      <AuthenticateBTN />

      <StatusBar hidden={false} />
    </>
  );
}
