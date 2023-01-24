import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clear } from "../features/letters/LettersSlice";
import { rWord, temizle } from "../features/letters/RandomWordSlice";
import { refresh } from "../features/letters/WrongSlice";
import { turn } from "../features/letters/WinSlice";
import Alphabet from "./Alphabets";


export default function Words({ words }) {

    const dispatch = useDispatch()
    const winState = useSelector((state) => state.win.value)

    const handleClick = e => {
        e.preventDefault()
        var randomNumber = Math.floor(Math.random() * (words.length))
        setNumber(randomNumber)
        setDisplay(true)
    }

    const handleRestart = e => {
        e.preventDefault()
        var randomNumber = Math.floor(Math.random() * (words.length))
        setNumber(randomNumber)
        setDisplay(true)
        dispatch(clear())
        dispatch(refresh())
    }

    const [number, setNumber] = useState(0)
    const [display, setDisplay] = useState(false)
    const [letterLength,setLetterLength] = useState(0)

    var randomWord = words[number]
    var wordArray = randomWord.word.split("")
    var wordLength = wordArray.length

    const selLets = useSelector((state) => state.selectedLetters.value)
    const selLetsArray = selLets.split("")
    const letterSpan = document.getElementsByClassName("word opacity-1")
    const birlestir = selLets.concat(letterSpan)

    useEffect(() => {
        setLetterLength(letterSpan.length)
    },[birlestir])

    useEffect(()=> {
        letterLength === randomWord.word.length && dispatch(turn())
    },[letterLength])

    useEffect(() => {
        dispatch(temizle())
        dispatch(rWord(randomWord.word))
    }, [number])

    console.log(winState)

    return (
        <>
            <div className="button-area">
                <button className="btn" disabled={display} onClick={handleClick}>Başla</button>
                <button className="btn" disabled={!display} onClick={handleRestart}>Yenile</button>
            </div>
            <Alphabet />
            <Card className={display ? "random-card" : "random-card opacity-0"}>
                <Card.Title className="word-card-title"><h4>İpucu: {randomWord.clue} <small>({wordLength} harf)</small></h4></Card.Title>
                <Card.Body className="word-card-body">
                    {wordArray.map((w, i) => (
                        <h1
                            key={i}>
                            <span
                                className={selLetsArray.includes(w) ? "word opacity-1" : "word opacity-0"}
                            >{w}
                            </span>
                        </h1>
                    ))}
                </Card.Body>
            </Card>

        </>
    )
}