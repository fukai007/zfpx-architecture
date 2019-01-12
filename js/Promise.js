const FULLFILLED = 'fullflled'
const REJECTED = 'rejected'
const PENDING = 'pending' 

class Promise{
	// excutor 执行器
	constructor(excutor){
		let  self = this;
		this.value=undefined;
		this.reason = undefined;
		this.status = PENDING;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];		
	
		// 执行成功
		let resolve = (val)=>{
			if(self.status === PENDING){
				self.status = FULLFILLED;
				self.val = val;
				that.onResolvedCallbacks.forEach(fulfiled => fulfiled());
			}
		}
	
		// 执行失败
	    let reject = (reason) => {
	        if (that.status === PENDING) {
	            self.status = REJECTED;
	            self.reason = reason;
	            self.onRejectedCallbacks.forEach(reject => reject());
	        }
	    }
    
	    try {
	        excutor(resolve, reject);
	    } catch (e) {
	        reject(e);
		}  
	}
}
