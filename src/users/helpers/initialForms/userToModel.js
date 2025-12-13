const userToModel = (UserData) => {
  return {
    personalId: UserData.personalId,
    first: UserData.firstName,
    last: UserData.lastName,
    email: UserData.email,
    birthDate: UserData.birthDate.slice(0, 10),
    gender: UserData.gender,
    phone: UserData.phone,
  };
};

export default userToModel;
