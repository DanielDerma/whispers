export const getAccessToken = async ({ token }: { token: string }) => {
  console.log("entre token", token);

  const res = await fetch("/api/get-access-token", {
    headers: {
      jwt: token,
    },
  });

  if (!res.ok) throw new Error("Error getting acess token");

  const { accessToken } = await res.json();
  return accessToken;
};
