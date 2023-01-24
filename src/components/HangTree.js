import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function HangTree() {

    const wrongCount = useSelector((state) => state.wrongCalc.value)


    return (
        <>
            <Card className="hangtree-card">
                <div className="hangtree-header">
                    <h3>Darağacı</h3>
                </div>
                <span className={wrongCount >= 6 ? "hang-6" : "hang-6 opacity-0"}></span>
                <span className={wrongCount >= 5 ? "hang-5" : "hang-5 opacity-0"}></span>
                <span className={wrongCount >= 4 ? "hang-4" : "hang-4 opacity-0"}></span>
                <span className={wrongCount >= 3 ? "hang-3" : "hang-3 opacity-0"}></span>
                <span className={wrongCount >= 2 ? "hang-2" : "hang-2 opacity-0"}></span>
                <span className={wrongCount >= 1 ? "hang-1" : "hang-1 opacity-0"}></span>
                <span className={wrongCount >= 7 ? "hang-7" : "hang-7 opacity-0"}></span>
                <span className={wrongCount >= 8 ? "hang-8" : "hang-8 opacity-0"}></span>
                <span className={wrongCount >= 9 ? "hang-9" : "hang-9 opacity-0"}></span>
                <span className={wrongCount >= 10 ? "hang-10" : "hang-10 opacity-0"}></span>
                <span className={wrongCount >= 11 ? "hang-11" : "hang-11 opacity-0"}></span>
            </Card>
        </>
    )
}