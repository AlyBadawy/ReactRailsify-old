import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const content = (
    <section>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <p>This is the home page!</p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );

  return content;
};
