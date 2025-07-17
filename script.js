function junaidstore(product){
    if(product == "a"){
        return "apple"
}else if(product == "b"){
        return "ball"
}else if(product == "c"){
        return "cap"
}else if(product == "d"){
        return"door"
}else if(product == "e"){
    return"egg"
}else if(product == "f"){
    return "fan"
}else if(product == "g"){
    return "gate"
}else if(product == "h"){
    return "horn"
}else if(product == "i"){
    return "ink"
}else if(product == "j"){
    return "jug"
}else if(product == "k"){
        return "kettle"
}else if(product == "l"){
        return "lamp"
} else if(product =="m"){
        return "mat"
}else if(product == "n"){
        return "nozzle"
}else if(product == "o"){
        return "orange"
}else if(product == "p"){
        return "pawpaw"
}else if(product == "q"){
        return "quail"
}else if(product == "r"){
        return "rose"
}else if(product == "s"){
        return "sweet"
}else if(product == "t"){
        return "table"
}else if(product == "u"){
        return "umbrella"
}else if(product == "v"){
        return "van"
}else if(product == "w"){
        return "window"
}else if(product == "x"){
        return "xylophone"
}else if(product == "y"){
        return "yatch"
}else if (product == "z"){
        return "zip"
}else {
        return "unavailable"
}
}
                                JAVASCRIPT CLASSWORK 16|07|26


function votingage(age){
    if (age > 18){
        return "eligible"
        
    }else if (age < 18){
        return "not eligible"
        
    }
    }
    
undefined
votingage(9)
'not eligible'
votingage(50)
'eligible'
votingage(17.9)
'not eligible'
votingage(100)
'eligible'




function integers(check){
    if (check > 0){
        return "positive number"
    }else if (check < 0){
        return "negative number"
    }
}
undefined
integers(1)
'positive number'
integers(-2)
'negative number'
integers(0.2)
'positive number'



function user(find){
    if (find == ""){
        return "unidentified"
}else {
    return "identified"
}
}


undefined
user{""}
VM3593:1 Uncaught SyntaxError: Unexpected token '{'Understand this error
user("wer")
'identified'
user("")
'unidentified'
user("me")
'identified'
                        JAVASCRIPT ASSIGMENT 16|07|25
 1.   Write a program that checks a number and print
function integer(detect){
    if (detect > 0){
        return "positive"
    }else if (detect == 0){
        return "zero"
    }else if (detect < 0){
        return "negative"
    }
}
undefined
integer(0)
'zero'
integer(90)
'positive'
integer(-2)
'negative'

2.  Write a program that checks the time of the day (hour) and prints:
funnction greeting(when){
    if (when < 12){
        return "Good Morning"
    }else if (when > 17){
        return "Good Evening"
    }else if (when >= 12 && when <= 17){
        return "Good Afternoon"
    }
}
undefined
greeting(1)
'Good Morning'
greeting(12)
'Good Afternoon'
greeting(13)
'Good Afternoon'
greeting(17)
'Good Afternoon'
greeting(19)
'Good Evening'
greeting(21)
'Good Evening'