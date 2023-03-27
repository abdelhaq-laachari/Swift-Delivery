// Logout user
const logout = () => {
  localStorage.clear();
};

const authService = {
  logout,
};

export default authService;
