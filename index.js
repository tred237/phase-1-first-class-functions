function petIntros(petName, cb) {
    if (petName === 'Nova') {
        return cb(petName) + ', I am a dog!';
    } else if (petName === 'Quasar') {
        return cb(petName) + ', I am a cat!';
    } else {
        return cb(petName) + ', I have no idea what I am...';
    }
}

petIntros('Nova', name => `My name is ${name}`);


function receivesAFunction(cb) {
    return cb();
}

receivesAFunction(() => console.log('My name is Trevor'));


function returnsANamedFunction() {
    return thisIsNamed;
}

function thisIsNamed() {
    console.log('This is named');
}

returnsANamedFunction();


function returnsAnAnonymousFunction() {
    return () => console.log("This is weird")
}

returnsAnAnonymousFunction();