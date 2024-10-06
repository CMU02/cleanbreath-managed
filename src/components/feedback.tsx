import { useEffect, useState } from "react";
import { getApi } from "../utils/getApi";
import FeedbackDetail from "./feedbackDetail";
import "../styles/feedback.css";

export interface Content {
    id : number;
    title : string;
    createAt : string;
    content : string;
}
interface FeedbackList {
    id : number;
    title : string;
    createAt : string;
}

export default function Feedback() {
    const [feedback, setFeedback] = useState<FeedbackList[]>([]);
    const [content, setContent] = useState<Content | null>(null);
    const [showContent, setShowContent] = useState<boolean>(false); 

    const showFeedbackContent = async (feedback_id : number) => {  
        const response = await getApi(`feedback/${feedback_id}`);
        setContent(response);
        setShowContent(true);
    }

    useEffect(() => {
        async function getFeedbackList() {
            const response = await getApi('feedback-list');
            setFeedback(response);
        }
        getFeedbackList();
    }, [feedback])

    return (
        <div className="feedback">
            <div className="feedbackTitle">
                <h1>피드백 현황</h1>
            </div>
            <table className="feedbackList">
                <thead className="feedbackRow">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody className="feedbackContent">
                    {
                        feedback.map((data : any, index) => {
                            return (
                                <FeedbackDetail
                                    index={index}
                                    feedback_id={data.feedback_id}
                                    title={data.title}
                                    createAt={data.createAt}
                                    content={content}
                                    showFeedbackContent={showFeedbackContent}
                                    closeFeedbackContent={() => setShowContent(false)}
                                    showContent={showContent}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}