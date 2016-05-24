

export class ConditionWatcher {

	constructor(rawConditions) {
		let conditions = this.conditions = rawConditions.showCondition;
		console.log(conditions);
		this.instant = conditions.instant != undefined ? conditions.instant : true;
		this.pageScroll = +conditions.onPageScroll || 0;
		this.onLeave = conditions.onLeave || false;
		this.delay = +conditions.delay || 0;

		this.leaveWatcher = this.leaveWatcher.bind(this);
		this.scrollWatcher = this.scrollWatcher.bind(this);
	}

	watch() {
		return (new Promise(this.promiseCore.bind(this)));
	}

	promiseCore(resolve, reject) {
		this.resolve = resolve;
		this.reject = reject;
		this.isDone = false;
		if(this.instant) {

			resolve();
			return;
		}

		if(this.pageScroll) {
			document.addEventListener('scroll', this.scrollWatcher);
			this.scrollWatcher();
			if(this.isDone)
				return;
		}

		if(this.onLeave) {
			document.addEventListener('mouseout', this.leaveWatcher);
		}
		console.log(this.delay * 1000);
		this.timeoutID = setTimeout(this.delayWatcher.bind(this), this.delay * 1000);

	}

	scrollWatcher(event) {
		let curScroll = document.documentElement.scrollTop || window.pageYOffset,
			maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			showScroll = this.pageScroll;
		if(maxScroll <= 0 || showScroll <= curScroll/maxScroll * 100) {
			this.satisfyCondition();
		}
	}

	leaveWatcher(event) {
		this.satisfyCondition();
	}

	delayWatcher() {
		this.satisfyCondition();
	}

	satisfyCondition() {
		this.isDone = true;

		this.stopWatch();

		this.resolve();
	}

	stopWatch() {
		document.removeEventListener('scroll', this.scrollWatcher);
		document.removeEventListener('mouseout', this.leaveWatcher);
		if(this.timeoutID)
			clearTimeout(this.timeoutID);
	}

	

}