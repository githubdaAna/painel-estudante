const querySelectUserId = `
SELECT * FROM usuario WHERE id = $1
`
module.exports = {
    querySelectUserId
}