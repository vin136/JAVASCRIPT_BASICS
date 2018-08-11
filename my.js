
/*function b(){
    console.log(out);

};

function a(){
    var out = 'i am in a'
    b()

};
var out = 'hi';
a()*/



/*function a(){

    function b(){
        console.log(out);
    
    };
    var out = 'i am in a'
    b()

};
var out = 'hi';
a()*/

// Anonymous functions 
/*myself()
var myself = function(){
    console.log('hi this is vinay')
}

greeting()
function greeting(){
    console.log('Testing my javascript understanding')
}
*/
/*
var greeting = function(f_name,l_name,_other){
    //very imp - to set default value
    l_name = l_name || 'varma'
    console.log(f_name)
    console.log(l_name)
    console.log('you are such a dick')
    console.log(_other)
    console.log('---------------')
}
greeting()
greeting('vinay')
greeting('vinay','varma')
greeting('vinay','varma','en',function(){console.log('this is cool')})
*/
// some more fun with execution context
/*
(function(){
    function fun(){
    arr = []
    for(var i = 0;i<3;i++){
        arr.push(function(){
            console.log(i)
        })
    }
    return arr

}


arr_here = fun()
arr_here[0]()
arr_here[1]()
arr_here[2]()
}())
*/
/*
function fun(){
    arr = []
    for(var i = 0;i<3;i++){
        arr.push(function(j){
            return function(){
            console.log(j)
        }}(i))
    }
    return arr

}

arr_here = fun()
arr_here[0]()
arr_here[1]()
arr_here[2]()*/

//closures and callbacks...all the time..and call,apply and bind

// Everything in javascript is an object or a primitive..

var a = []
var b = function(){

}
var c = {}
// 'new' keyword creates an empty object and assigns this to that object.
// and returns it
//all functions has prototype obj creatend and it is set when new
// is used to the empty object.
// so let's follow simple convention use firstletter capital for func constructors
// funcconstructor.prototype = __proto__ of obj created.

function person(){
    this.first_name = 'john';
    this.last_name = 'doe'




}
var greet = new person()
function cool(){

}

//why methods are not defined under func constructor directly..because they 
// take up space..

//built in function constructors 

this.str = 'hey'
var my_name = new String('i am vinay')
console.log(String.prototype.indexOf('i'))
console.log(String.prototype.indexOf('h'))
console.log(my_name.indexOf('i'))

// javascript calls func conts for strings and arrays automatically but
// not numbers

// this is how you extend the language...

String.prototype.islongenouh = function(){
    return this.length > 5
}
console.log('janeyo'.islongenouh())


//arrays and for ...in using reflection eg. _.extend(obj1,obj2),since 
//arrays are objects as strings when you create them they are constru
//ted through Array.portotype -- for .. in gives you extra porperties.

Array.prototype.new_prop = 'hey i got in '
arr = ['hi','this','is_bad'];
for (var i in arr){
    console.log(i)
}



