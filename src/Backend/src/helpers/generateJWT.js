import jwt from 'jsonwebtoken';

const generateJWT = (user) => {
  return jwt.sign({
    ID: user.ID_Person,
    Username: user.Username,
    Type: user.Type
  }, "asojunquillal-LosOsitos-ci0128-I-2023", {
    expiresIn: "38h"
  });
}

export default generateJWT;