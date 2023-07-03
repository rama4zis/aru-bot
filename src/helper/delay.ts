const delay = 1500;

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms || delay));
}

export = sleep;