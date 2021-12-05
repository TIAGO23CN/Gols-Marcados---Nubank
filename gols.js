function solucao(golsA, golsB) {
	//seu codigo aqui
    /*
    if (golsA = 1) {
        console.log(3);
    } else if (golsA = 2){
        Console.log(1);
    } else if (golsA <= 3){
        Console.log(0);
    }
    */

    if(golsA > golsB){
        console.log(3)
    } else if(golsA == golsB){
        console.log(1)
    } else if (golsA < golsB){
        console.log(0)
    }
}

function processData(input) {
    const [golsA, golsB] = input.trim().split(" ").map(x => Number(x));
    solucao(golsA, golsB);
}
 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});