import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <hr />
      <form action={handleGithubLogin}>
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
