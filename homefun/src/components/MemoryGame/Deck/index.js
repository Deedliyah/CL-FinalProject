import { KanjiTable } from './kanji'

function shuffle(array) {
    const _array = array.slice(0)
    array.forEach((e) => {
        let randomIndex = Math.floor(Math.random() * (e + 1))
        let temp = _array[e]
        _array[e] = _array[randomIndex]
        _array[randomIndex] = temp
    });
    return _array
}

export default function initializeDeck() {
    let id = 0
    const cards = KanjiTable.reduce((acc, pair) => {
        acc.push({
            id: id++,
            pair
        })
        return acc
    }, [])
    return shuffle(cards)
}