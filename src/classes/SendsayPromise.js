export class SendsayPromise {
	constructor(actionFunc) {
		this.resolveArr = [];
		this.rejectArr = [];
		this.resolved = false;
		this.rejected = false;
		actionFunc(this.resolve.bind(this), this.reject.bind(this));

	}

	resolve() {
		if(!this.resolved && !this.rejected)
			this.resolved = true;
		this.executeArr(this.resolveArr);
	}

	reject() {
		if(!this.resolved && !this.rejected)
			this.rejected = true;
		this.executeArr(this.rejectArr);
	}

	executeArr(arr) {
		if(!arr)
			return;
		for(let i = 0; i < arr.length; i++)
			arr[i]();

	}

	then(resolveCB, rejectCB) {
		if(resolveCB && resolveCB instanceof Function) {
			if(!this.resolved && !this.rejected)
				this.resolveArr.push(resolveCB);
			else if(this.resolved)
				resolveCB();
		}
		if(rejectCB && rejectCB instanceof Function) {
			if(!this.resolved && !this.rejected)
				this.rejectArr.push(rejectCB);
			else if(this.rejected)
				rejectCB();
		}
		return this;
	}
}