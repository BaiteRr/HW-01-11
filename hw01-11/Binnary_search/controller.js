function binarySearch() {
    setText("");
    let count = getCount();
    if (+count != count || !count) {
        setText("Ошибка, нужно вводить число");
        if (+count < 0)
            setText("Колличество элементов  всегда > 0")
        return;
    }
    let number = getValue();
    if (+number != number || !number) {
        setText("Ошибка, нужно вводить число");
        return;
    }
    let array = toDoFibonachNumber(count);
    search(array, number)
    if (getText() != number + " - найдено")
        setText(number + " - чиcло не найдено")
}
function reset() {
    setText("");
    setValue("");
    setCount("");
}