const jwt = require('jsonwebtoken')
const config = require('config')
module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: 'Вы не авторизованны' })
  }
  const [type, token] = authorization.split(' ')

  if (type !== 'Bearer') {
    return res.status(400).json({ error: 'не верный тип токена' })
  }

  try {
    req.user = await jwt.verify(token, config.get('SecretKay'))
    next()
  } catch {
    return res.status(401).json({ error: 'неверный токен' })
  }
}
