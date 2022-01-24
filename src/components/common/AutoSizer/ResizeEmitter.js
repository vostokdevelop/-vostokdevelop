const DISPOSE_CHECK_DELAY = 10000;

export class ResizeEmitter {

    observer = null;

    target = null;
    onDispose = null;
    subscribers = [];
    disposeTimeout = null;

    constructor(target, onDispose) {
        this.target = target;
        this.onDispose = onDispose;
        this.observer = new ResizeObserver(this.broadcast);
        this.observer.observe(this.target);
    }

    subscribe = (fn) => {
        this.subscribers.push(fn);
        this.clearTimeout();
    }

    unsubscribe = (fn) => {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
        this.clearTimeout();
        this.tryDispose();
    }

    broadcast = () => {
        this.subscribers.forEach(subscriber => subscriber());
    }

    clearTimeout = () => {
        if (this.disposeTimeout !== null) {
            clearTimeout(this.disposeTimeout);
        }
    }

    tryDispose = () => {
        this.disposeTimeout = setTimeout(() => {
            if (this.subscribers.length === 0) {
                this.observer.unobserve(this.target);
                this.observer.disconnect();
                this.onDispose();
            }
        }, DISPOSE_CHECK_DELAY);
    }

};

export default ResizeEmitter;