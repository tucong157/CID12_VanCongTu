function sayHello(){
    console.log('Hello World!');
}

document
    .getElementById('btnClickMe')
    .addEventListener('click', function(evt){
        console.log('Hello world 2!');
    });
document
    .getElementById('btnClickMe')
    .addEventListener('click', function(evt){
        console.log(this);
        
        console.log('Hello World 3!');
    })