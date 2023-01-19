document.addEventListener('DOMContentLoaded', function() {
    // Your code here

    // Exercise 1
    console.log('=============== Exercise 1 ===============');
    // var name = 'Johnnn';
    // console.log(name)
    // console.log(name.slice(0, name.length / 2));

    // Exercise 2
    console.log('=============== Exercise 2 ===============');
    var name = 'hello';
    // var name2 = 'world';
    // document.write(name + name2)
    // document.write(name.slice(1) + name2.slice(1));

    // Exercise 3
    // console.log('=============== Exercise 3 ===============');

    // const string = 'tallinnaprantsuselutseum';
    // function getNewString(string) {
    //     if(string.length < 3) return string
    //     return string.slice(0,3) + string.slice(-3)
    // };
    // console.log(getNewString(string));

    // Exercise 4
    console.log('=============== Exercise 4 ===============');

    // var nr = 50;
    // var nr2 = 50;
    // var nrFrom100 = 100 - nr;
    // var nr2From100 = 100 - nr2;
    
    // if (nrFrom100 < nr2From100) {
    //     console.log(nr)
    // } else {
    //     console.log(nr2)
    // }

    // Exercise 5
    console.log('=============== Exercise 5 ===============');

    var nr1 = 90;
    var nr2 = 10;

    if(nr1 == 100 || nr2 == 100 || (nr1 + nr2) == 100) {
        console.log('YEY')
    } 

    // Exercise 6
    console.log('=============== Exercise 6 ===============');
    // var arrayOfStrings = ['ö', 'tere', 'see', 'on', 'lause'];
    // function findLongestString(strings) {
    //     var longestStringLength = 0;
    //     var longestStringIndex = 0;

    //     for (var i = 0; i < strings.length; i++) {
    //         if (strings[i].length > longestStringLength) {
    //             longestStringLength = strings[i].length;
    //             longestStringIndex = i;
    //         }
    //     }

    //     console.log(strings[longestStringIndex])
    // }

    // findLongestString(arrayOfStrings);


    // Exercise 7
    console.log('=============== Exercise 7 ===============');
    // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

    // for(var i = 0; i < numbers.length; i++) {
    //     if(numbers[i] % 2 == 0) {
    //         console.log(numbers[i])
    //     }
    // }

    // Exercise 8
    // console.log('=============== Exercise 8 ===============');

    // const numbers = [123,12,233,2,1,2,3,5,23,5,2,3,4,2,34,5,1,2,5,2,3,5,23,4,23,345,24];
    // function getAmountOfEvensUpToAGivenNr(nrs, limit = 300) {
    //     let amount = 0
    //     nrs.forEach(e => {
    //         if(e % 2 ==0 & e < limit) amount++
    //     });
    //     return amount
    // };
    // console.log(getAmountOfEvensUpToAGivenNr(numbers));
    // // Exercise 9
    console.log('=============== Exercise 9 ===============');
    const minuFailid = ['index.html', 'style.css', 'style2.css', 'main.js'];
    for (var i = 0; i < minuFailid.length; i++) {
        const fileNameComponents = minuFailid[i].split('.');
        console.log(fileNameComponents[fileNameComponents.length - 1]);

        if (fileNameComponents[fileNameComponents.length - 1] == 'css') {
            
        }
        
    }

    // Exercise 10
    console.log('=============== Exercise 10 ===============');

    // Exercise 11
    console.log('=============== Exercise 11 ===============');
});