const checkAuth = () => {
  const token = localStorage.getItem("howard_shores");
  if (token !== null) return token;
  else return false;
};

export default checkAuth;
