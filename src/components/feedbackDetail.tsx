import { Content } from "./feedback";


interface FeedbackDetailProps {
    index: number;
    feedback_id: number;
    title: string;
    createAt: string;
    content : Content | null;
    showFeedbackContent: (feedback_id: number) => void;
    closeFeedbackContent: () => void;
    showContent : boolean;
}

export default function FeedbackDetail({ index, feedback_id, title, createAt, showContent, content, showFeedbackContent, closeFeedbackContent }: FeedbackDetailProps) {
    return (
        <>
            <div
                className="feedbackColumn" 
                key={feedback_id}
                onClick={() => showFeedbackContent(feedback_id)}
            >
                <div>{index + 1}</div>
                <div>{title}</div>
                <div>{createAt.substring(0, 10)}</div>
            </div>
            {
                showContent && feedback_id === content?.id && 
                <div className="feedbackContentDetail">
                    <p>{content.content}</p>
                    <button onClick={closeFeedbackContent}>닫기</button>
                </div>
            }
        </>
    )
}