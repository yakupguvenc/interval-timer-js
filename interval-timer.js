/**
 *
 * @param callback
 * @param second
 * @param repeat
 * @param localStorageName
 * @returns {string|number}
 */
function setIntervalTimer(callback = () => console.log('interval-timer-working'), second = 60, repeat = true, localStorageName = 'interval-timer-js-remainer-time') {
    let remainerTime = localStorage.getItem(localStorageName);

    if (remainerTime) {
        setInterval(() => {
            remainerTime = localStorage.getItem(localStorageName);
            if (!remainerTime || remainerTime <= 0) {
                remainerTime = second;
                callback()

                if (!repeat)
                    return stop()
            }
            localStorage.setItem(localStorageName, remainerTime - 1);

        }, 1000)

    } else {
        localStorage.setItem(localStorageName, second);
        setIntervalTimer(second);
    }

    return remainerTime ? remainerTime : second;

}