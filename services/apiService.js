import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const apiService = async (method, path, token = null, extendHeader = null, body = null) => {
  let headers = {};

  /*    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2NhNzkxYjQtZTZjNy00M2MyLTk0MzQtMzllYjY5MmQyYTc4IiwiaWF0IjoxNjU4OTQ3MjkxLCJleHAiOjE2NTg5OTA0OTF9.rd5qQ1fJ1jrlf_tAwsmq5bJsEKWZ-74pnsYQzV2zzZI'
   */
  if (extendHeader) headers = { ...headers, ...extendHeader };
  if (token) headers = { ...headers, Authorization: `Bearer ${token}` };

  const config = {
    headers: headers,
  };

  if (method == "GET") {
    try {
      const res = await axios.get(`${API_URL}${path}`, config);
      return res.data;
    } catch (e) {
      if (e.response.data) return e.response.data;
      return null;
    }
  }

  if (method == "POST") {
    try {
      const res = await axios.post(`${API_URL}${path}`, body, config);
      return res.data;
    } catch (e) {
      if (e.response.data) return e.response.data;
      return null;
    }
  }

  if (method == "PATCH") {
    try {
      const res = await axios.patch(`${API_URL}${path}`, body, config);
      return res.data;
    } catch (e) {
      if (e.response.data) return e.response.data;
      return null;
    }
  }

  if (method == "TEST GET") {
    try {
      console.log("e");
      const res = await axios.get(`${path}`);
      return res.data;
    } catch (e) {
      console.log(e);
      if (e.response.data) return e.response.data;
      return null;
    }
  }
};
export default apiService;
