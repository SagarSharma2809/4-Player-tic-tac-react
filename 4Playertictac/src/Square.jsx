import './Square.css'

export default function Square({ num, value, clicFunc }) {

    function handleClick() {
        clicFunc(num);
    }
    return (
        <><button onClick={handleClick}>{value}</button>
        </>
    )
}