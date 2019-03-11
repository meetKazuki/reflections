import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Helper = {
  /**
   * Hash password method
   */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  /**
   * Compare password method
   */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  /**
   * isValidEmail helper method
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
   * Generate token method
   */
  generateToken(id) {
    const token = jwt.sign({
      userID: id,
    }, process.env.SECRET, { expiresIn: '7d' });
    return token;
  },
};

export default Helper;
