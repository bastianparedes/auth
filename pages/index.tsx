import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

const Index = (): JSX.Element => {
  const session = useSession();
  if (session.status === 'authenticated') {
    return (
      <>
        Signed in as {session.data?.user?.name} <br />
        <button
          onClick={() => {
            void signOut();
          }}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => {
          void signIn();
        }}
      >
        Sign in
      </button>
    </>
  );
};

export default Index;
