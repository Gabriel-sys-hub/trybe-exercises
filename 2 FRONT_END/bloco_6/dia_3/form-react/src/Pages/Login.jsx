import React from 'react';

export function Login() {
  return (
    <div>
      <form>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="button">Login</button>
      </form>
    </div>
  )
}
