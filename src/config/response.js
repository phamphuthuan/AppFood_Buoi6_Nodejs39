export const responseApi = (res, statusCode, data, message) => {
    res.status(statusCode).json({
        message: message,
        data: data,
        date: new Date()
    })
}