import Customer from '../models';

import { createToken, serverResponse } from '../utils'

export const register = async (req, res) => {
  try {
    const customerExist = await Customer.countDocuments({ username: req.body.username })

    if (customerExist)
     return serverResponse(res, 'Username has been taken', 409)

    const newCustomer = await new Customer(req.body).save()

    const token = createToken({
      username: newCustomer.username,
      id: newCustomer._id
    })

    serverResponse(res, {
      message: 'register successful. Start receiving messages!',
      payload: {
        token
      }
    })
  } catch (err) {
    serverResponse(res, 'internal server error', 500, err)
  }
}

export const login = (req, res) =>{

    res.json({
      message:'login succesful',
      payload:{
        token:'sdsdssdds',
        data:{
          name:'mznimie'
        }
      }
    })
}