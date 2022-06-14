import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_RAW_API

export const getCalculadoraReal = async (cedula) => {
  debugger
  //   const resp = await axios({
  //     url: `${base_url}/${cedula}`,
  //   })
  //   return resp.data
}

export const postScoring = async (body) => {
  //   debugger
  //   const resp = await axios({
  //     method: "post",
  //     url: `${base_url}/scoring/doScoring`,
  //     data: JSON.stringify(body),
  //   })
  //   return resp.data
}

export const otpVerification = async (cellphone, otp) => {
  try {
    const result = await axios.get(
      `${baseUrl}/session/verify_otp/${cellphone}/${otp}`
    )
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const createOtp = async (cellphone) => {
  try {
    const resp = await axios.post(
      `${baseUrl}/session/otp`,
      { cellphone },
      {
        "Content-Type": "application/json",
      }
    )
    return resp.data
  } catch (err) {
    console.log(err)
    return err
  }
}
