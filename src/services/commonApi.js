import axios from "axios";

const serverUrl = "https://diavets-backend.onrender.com"

export const commonApi = async (httpRequest, url, reqbody, reqHeader) => {
    const config = {
        method: httpRequest,
        url,
        data: reqbody,
        headers: { "Content-Type": "application/json" }
    }
    return await axios(config).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
}

// get content
export const getContentApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-content`)
}

// get image
export const getImageApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-image`)
}

// post contact form data
export const postContactFormApi = async (reqBody) => {
  return await commonApi('POST', `${serverUrl}/contact`, reqBody);
}
