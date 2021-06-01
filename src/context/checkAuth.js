import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("howard_shores");
  if (!token) return false;

  try {
    const { _id } = decode(token);
    return _id;
  } catch (e) {
    return false;
  }
};

export default checkAuth;
