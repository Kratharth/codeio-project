export default {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'must be at least 8 characters' },
    length: {
      minimum: 8
    }
  }
};
