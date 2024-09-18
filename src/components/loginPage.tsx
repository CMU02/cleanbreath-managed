import { useState } from "react"
import "../styles/loginPage.css"

export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");






    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>CleanBreath | 관리자 전용</h1>
                </div>
                <div className="idContainer">
                    <div className="idImg">
                        <img src="/public/images/person.svg" alt="person" />
                    </div>
                    <div className="idField">
                        <input type="text" placeholder="이름" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className="pwdContainer">
                    <div className="pwdImg">
                        <img src="/public/images/lock.svg" alt="lock" />
                    </div>
                    <div className="pwdField">
                        <input type="password" placeholder="비밀번호"/>
                    </div>
                </div>
                <div>
                <button className="loginBtn">LogIn</button>
                </div>
            </div>
        </>
    )
}