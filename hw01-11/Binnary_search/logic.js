function toDoFibonachNumber(number) {
    --number;
    setText("1,");
    let binary = [1];
    toDoFibonach(binary, number);
    return binary;
}
function toDoFibonach(array, number, first = 0, second = 1) {
    count = Number(first) + Number(second);
    array.push(count);
    first = second;
    second = count;
    if (--number > 0)
        toDoFibonach(array, number, first, second);
}
function search(array, number) {
    let index = parseInt(array.length / 2);
    let element = array[index];
    if (element < number) {
        array = array.slice(index)
        if (array.length == 1)
            return array[0];
        search(array, number);
    }
    if (element > number) {
        array = array.slice(0, index)
        if (array.length == 1)
            return array[0];
        search(array, number);
    }
    if (element == number) {
        setText(number + " - найдено");
    }
}