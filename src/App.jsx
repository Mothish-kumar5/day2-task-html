import Layout from "./components/Layout";
import Button from "./components/Button";
import UserCard from "./components/UserCard";

function App() {

  const showMessage = () => {
    alert("Welcome!");
  };

  return (
    <Layout>

      <h2>React Components Demo</h2>

      <Button
        label="Click Here"
        onClick={showMessage}
      />

      <hr />

      <UserCard name="Alice" age={22} />
      <UserCard name="Bob" age={28} />

    </Layout>
  );
}

export default App;