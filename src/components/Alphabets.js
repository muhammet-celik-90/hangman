import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selLet } from "../features/letters/LettersSlice";
import { increment } from "../features/letters/WrongSlice";
import { useEffect, useState } from "react"


export default function Alphabet() {

    const letters = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö","P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

    const dispatch = useDispatch();

    const selLets = useSelector((state) => state.selectedLetters.value)
    const selLetsArray = selLets.split("")

    const wrongCalc = useSelector((state) => state.wrongCalc.value)

    const ranWord = useSelector((state) => state.randomWordSlice.value)
    var wordArray = ranWord.split("")

    function found(w) {
        !wordArray.includes(w) && dispatch(increment())
    }

    return (
        <Card className="alphabet-card">
            <Card.Title className="word-card-title"><h4>Harf Seçiniz</h4></Card.Title>
            <div className="letters-wrapper">
                {letters.map((l, i) => (
                    <h2
                        key={i}
                        onClick={() => { dispatch(selLet(l)); found(l)}}
                        className={selLetsArray.includes(l) ? "letters selectedLetter" : "letters"}
                    >{l}
                    </h2>
                ))}
            </div>
        </Card>
    )
}