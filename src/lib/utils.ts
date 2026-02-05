export const isEmail = (email: string): boolean => {
  const emailReg =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailReg.test(email);
};