import { useState } from "react";
import { DataType } from "../App"

import "../styles/dashboard.css";


interface ManagePageProps {
    data : DataType
}

export default function ManagePage(manageData : ManagePageProps) {
    const manage : DataType = manageData.data; // 관리자 데이터
    const [activeMenu, setActiveMenu] = useState<string | null>('feedback'); // 활성화된 메뉴

    const toggleMenu = (menu: string | null) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    }

    const logout = () => {
        // sessionStorage.removeItem('token');
        // sessionStorage.removeItem('username');

        alert("로그아웃 되었습니다.");
        // window.location.reload();
    }



    return (
        <>
            <div className="manageContainer">
                <header>
                    <div>
                        <img src="/images/Logo.svg" alt="Logo" />
                        <h1>CleanBreath | 관리자</h1>
                    </div>
                    <div>
                        <p>{manage.username}&nbsp;님 환영합니다.</p>
                        <button onClick={logout}>로그아웃</button>
                    </div>
                </header>
                <div className="content">
                    <aside>
                        <div
                            className={activeMenu === 'feedback' ? 'active' : 'menu'}
                            onClick={() => toggleMenu('feedback')}
                        >
                            피드백 현황
                        </div>
                        <div
                            className={activeMenu === 'requestSmokingArea' ? 'active' : 'menu'}
                            onClick={() => toggleMenu('requestSmokingArea')}
                        >
                            흡연구역 요청 현황
                        </div>
                        <div
                            className={activeMenu === 'notice' ? 'active' : 'menu'}
                            onClick={() => toggleMenu('notice')}
                        >
                            공지사항
                        </div>
                    </aside>
                    <main className="mains">
                        {activeMenu}
                    </main>
                </div>
            </div>
        </>
    )
}