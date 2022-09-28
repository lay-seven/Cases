console.log(Boolean([]));

function foo() {
    var i = 0;
    return function () {
        console.log(i++);
    }
}

let fn1 = foo();
let fn2 = foo();

fn1(); //0
fn1(); //1
fn1(); //2
fn2(); //0
fn2(); //1