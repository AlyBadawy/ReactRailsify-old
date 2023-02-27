import React from 'react';
import { Link } from 'react-router-dom';

export const Public = () => {
  const content = (
    <section>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <p>
          This is the public route. You can see this page without logging in.
        </p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );

  return content;
};
