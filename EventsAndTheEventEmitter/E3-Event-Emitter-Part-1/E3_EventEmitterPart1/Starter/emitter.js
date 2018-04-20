function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

Emitter.prototype.off = function () {
    this.events = {};
}

module.exports = Emitter;