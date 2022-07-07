export const getAcessToken = async ({ token }: { token: string }) => {
  const res = await fetch("/api/get-access-token", {
    headers: {
      jwt: token,
    },
  });

  if (!res.ok) throw new Error("Error getting acess token");

  const { acessToken } = await res.json();
  return acessToken;
};
