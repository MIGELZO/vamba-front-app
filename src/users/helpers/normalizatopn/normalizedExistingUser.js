const normalizedExistingUser = (user) => ({
  personalId: user.pId,
  firstName: user.firstName,
  lastName: user.lastName === "" ? null : user.lastName,
  email: user.email === "" ? null : user.email,
  birthDate: user.birthDate,
  gender: user.gender === "" ? null : user.gender,
  phone: user.phone === "" ? null : user.phone,
});

export default normalizedExistingUser;
