import { useAction, useFindMany, useGet } from "@gadgetinc/react";
import { isEqual } from "lodash";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { api } from "../utility/api";

const LogOutButton = () => {
  const [{ error, fetching }, logout] = useAction(api.currentSession.logOut, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <button type="submit" disabled={fetching} onClick={() => void logout()}>
      Log Out
    </button>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ error, fetching }, login] = useAction(api.currentSession.logInViaEmail, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void login({ email, password });
      }}
    >
      <div>
        {error && (
          <p>There was an error logging in: {String(error)}</p>
        )}
        <p>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
        <p>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
        <p><button type="submit" disabled={fetching}>Log in</button></p>
      </div>
    </form>
  );
};

const Home: NextPage = () => {
  const [{ error, fetching, data }, refresh] = useGet(api.currentSession, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <>
      <Head>
        <title>Login Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {fetching && (
          <>fetching...</>
        )}
        {isEqual(data?.state, { created: "loggedIn" }) && <><p>JSON.stringify(data)</p><p>LogOutButton</p></>}
        {isEqual(data?.state, { created: "loggedOut" }) && <LoginForm />}
      </div>

    </>
  );
};

export default Home;