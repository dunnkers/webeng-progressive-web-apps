onmessage = function (e) {
    console.time('calculating pi');

    let iterations = 100000000;
    let pi = 0;
    let iterator = sequence();

    for (let i = 0; i < iterations; i++) {
        pi += 4 / iterator.next().value;
        pi -= 4 / iterator.next().value;
    }

    function* sequence() {
        let i = 1;
        while (true) {
            yield i;
            i += 2;
        }
    }

    postMessage(pi);
    console.timeEnd('calculating pi');
}