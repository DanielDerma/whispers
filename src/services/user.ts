export const getAccessToken = async ({ token }: { token: string }) => {
  const res = await fetch("/api/get-access-token", {
    headers: {
      jwt: token,
    },
  });

  if (!res.ok) throw new Error("Error getting acess token");

  console.log(res);

  const { accessToken, sid } = await res.json();

  return { accessToken, sid };
};
