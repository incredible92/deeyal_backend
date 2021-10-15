export const serverResponse = (res, data, status = 200, err) => {
  if (err) console.error(err)

  if (status >= 400) {
    res.status(status).send(data)
  } else {
    res.status(status).json(data)
  }
}

export const hashPassword = (pswd) => bcrypt.hashSync(pswd, 2)