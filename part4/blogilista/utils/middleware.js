const tokenExtractor = (req, res, next) => {
   
    const auth = req.get('authorization')

    if(auth && auth.startsWith('Bearer ')) {
        req.token = auth.substring(7)
    }

    next()
}

const exportable = {
    tokenExtractor
}

module.exports = exportable