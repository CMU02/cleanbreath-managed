import { useState } from "react"
import "../styles/loginPage.css"
import axios from "axios";

export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const loginFunc = async() => {
        if (username.trim() === "" || password.trim() === "") {
            alert("아이디와 비밀번호를 입력해주세요");
            return;
        }

        /**
         * @todo : url 추후 배포된 백엔드 주소로 변경 예정
         */
        await axios.post('http://localhost:7001/v1/verify', {
            username: username,
            password: password
        }).then((res) => {
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('username', res.data.username);

            alert("로그인 성공");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
            alert("아이디 및 비밀번호를 확인해주세요");
        });
    }

    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>CleanBreath | 관리자 전용</h1>
                </div>
                <div className="idContainer">
                    <div className="idImg">
                        <img src="/images/person.svg" alt="person" />
                    </div>
                    <div className="idField">
                        <input 
                            type="text" 
                            placeholder="이름"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pwdContainer">
                    <div className="pwdImg">
                        <img src="/images/lock.svg" alt="lock" />
                    </div>
                    <div className="pwdField">
                        <input 
                            type="password" 
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </div>
                <div>
                <button className="loginBtn" onClick={loginFunc}>로그인</button>
                </div>
            </div>
        </>
    )
}