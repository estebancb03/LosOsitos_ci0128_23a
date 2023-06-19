import jwt from 'jsonwebtoken';
import { getEmployeeByUsername } from '../models/employeeModel.js';

const checkOperatorAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, "asojunquillal-LosOsitos-ci0128-I-2023");
      req.user = decoded;
      return next();
    } catch(exception) {
      const error = new Error('Invalid token');
      return res.status(403).json({ message: error.message });
    }
  } 
  if(!token) {
    const error = new Error('Invalid token or bearer');
    res.status(403).json({ message: error.message });
  }
  next();
}

const checkAdminAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, "asojunquillal-LosOsitos-ci0128-I-2023");
      req.user = decoded;
      if (decoded.Type === 0) {
        return next();
      } else {
        const error = new Error('Invalid admin token');
        res.status(403).json({ message: error.message });
      }
    } catch(exception) {
      const error = new Error('Invalid token');
      return res.status(403).json({ message: error.message });
    }
  } 
  if(!token) {
    const error = new Error('Invalid token or bearer');
    res.status(403).json({ message: error.message });
  }
  next();
}

export {
  checkOperatorAuth,
  checkAdminAuth
}