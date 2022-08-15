const fetchMutationResult = (mutation: string) => {
  return fetch('http://34.192.200.70/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutation }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const authenticateUser = (username: string, password: string) => {
  return fetchMutationResult(`
    tokenAuth (username: ${username}, password: ${password}) {
      payload,
      refreshExpiresIn,
      token
    }
  `);
};
