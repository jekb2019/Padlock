export class LockService {
    private isLocked: boolean = true;
    
    constructor(private passcode: string) {}

    lock() {
        this.isLocked = true;
    }

    /**
     * Only unlock the padlock when correct passcode is given
     * @param passcode 
     * @returns true if successfully unlocked. False otherwise
     */

    unlock(passcode: string):boolean {
        if(passcode === this.passcode) {
            this.isLocked = false;
            return true;
        }
        return false;
    }

    get getIsLocked() {
        return this.isLocked;
    }
    
}