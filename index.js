const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Correcto');
        } else {
            reject ('Incorrectisimo');
        }
    });
};


somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    
    
const WillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve('True');
                }, 2000)
            } else {
                const error = new Error('Malmal');
                reject(error);
            }
        })
}

WillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), WillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })