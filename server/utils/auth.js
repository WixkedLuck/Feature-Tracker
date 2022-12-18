const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
// const expiration = '2h';
const expiration = '48h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // context is req (request). We add user to request, & graphql has the request(which contains the user)
      req.user = data;
    } catch {
      console.log('Invalid token');
      // console.log( "-------------------- OH NO please stop repeating  --------------------"); 
    }

    return req;
  
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};