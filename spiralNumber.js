
function spiralNumber(num){

    var totalNum = num * num
    var sideNum = num 
    var changeSideNum = 1// nilainya ada 0 , 1, 2
    // jika 2 maka harus di set menjadi 0 lagi 
    var result = []
    var x = 0
    var y = 0
    var directions = ["right","bottom","left","top"]
    var currDirect = 0
    var counter = 0

    for(var i = 0; i < num; i++) {
        var temp = []
        for( var j = 0; j < num; j++) {
            temp.push(0)
        }
        result.push(temp)
    }

    while(counter <= totalNum ){

        //condition
        if(directions[currDirect] === "right") {

            // tentukan x nya berapa , y nya berapa 
        } 
        else if( directions[currDirect] === "bottom") {

        }
        else if( directions[currDirect] === "left") {

        }
        else if( directions[currDirect] === "top") {

        }
        // perulangan 
        for(var k = 1; k <= sideNum; k++) {
            // start x dan y nya dari condition yang diatas
            // kondisi jika x nya harus meningkat, atau y nya harus meningkat
        }

        if(changeSideNum === 2) {
            changeSideNum = 0
            sideNum--
        }
    }

    return result
}

console.log( spiralNumber(5) )