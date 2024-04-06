const JWT_SECRET = "qwertymnbvcasdfglkjhg";
const jwt = require('jsonwebtoken')

exports.fn = (req, res, next)=>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}