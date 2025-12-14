const userToModel = (UserData) => {
  return {
    pId: UserData.personalId,
    firstName: UserData.firstName,
    lastName: UserData.lastName,
    email: UserData.email,
    birthDate: UserData.birthDate.slice(0, 10),
    gender: UserData.gender,
    phone: UserData.phone,
  };
};

export default userToModel;
