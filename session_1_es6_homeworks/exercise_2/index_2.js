function myFunction() {

}
document.getElementById('btnSearch').addEventListener('click', function () {
    var firstNum = document.getElementById('numA').value;
    var secondNum = document.getElementById('numB').value;
    console.log(`The prime numbers between ${firstNum} and ${secondNum} are:`);
    for (let i = firstNum; i <= secondNum; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
            // result.innerHTML = `The prime numbers between ${firstNum} and ${secondNum} are: `;
        }
    }
})




