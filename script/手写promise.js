class Commitment {
    static pending = '待定'; fulfilled = '成功'; reject = '失败';
    constructor(func) {
        this.status = Commitment.pending;
        this.result = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.status === Commitment.pending) {
            this.status = Commitment.fulfilled;
            this.result = result;
        }
    }
}