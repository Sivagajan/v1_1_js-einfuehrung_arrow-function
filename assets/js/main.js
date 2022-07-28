console.log('works')

function intro (){
    console.log('Hello World')
}

const introArrow = () => console.log('Hello World')


/* ---------------------Alte aufgaben */

//---------------------------Lev1_1---------------------------
let a = 1+3

console.log('Hello World')

function intro(){   // ?????
    console.log('1 + 3 = ' + a) 
}
intro()
//-----------------Arrow-------------

console.log('ArrowFunction')

let introB = (a, b) => {console.log( a + ' + ' + b +' = ' + (a+b))}

introB(4,5)

//---------------------------Lev1_2---------------------------
function intro2(paraName)
{
    let varName = 'SuperCoder'
    console.log('Hi ' + varName + '. Mein Name ist ' + paraName + '. ')
}

let name = 'Siva'

intro2(name)

//-----------------Arrow-------------

console.log('ArrowFunction')

let intro2B = (paraName2) => {
    varName2 = 'Supercoder'
    return 'Hi ' + varName2 + '. Mein Name ist ' + paraName2
}

console.log(intro2B('Sivagajan'))


