const Async = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Something Async'), 3000)
        : reject (new Error ('Error 1'))
    });
}


const doAsync = async () => {
    const something = await Async();
    console.log(something);
}

console.log('Before');
doAsync();
console.log('After');



const anotherFunc = async () => {
    try {
        const something = await doAsync ();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before xd');
anotherFunc();
console.log('After xd');
