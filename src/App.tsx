import { useEffect, useState } from "react";
import LoginPage from "./components/loginPage";
import ManagePage from "./components/managePage";

export interface DataType {
  token : string,
  username : string
}



export default function App() {
  const [data, setData] = useState<DataType | undefined>(undefined);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const username = sessionStorage.getItem('username');

    if (token && username) {
      setData({
        token : token,
        username : username
      })
    } else {
      setData(undefined);
    }
  }, [sessionStorage.getItem('token'), sessionStorage.getItem('username')])


  return (
    <>
      {!data?.token ? <LoginPage /> : <ManagePage data={data} />}
    </>
  )
}
