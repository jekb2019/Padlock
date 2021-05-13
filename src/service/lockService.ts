export class LockService {
    private isLocked: boolean = true;
    private currentPasscode: string = '000';

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
        // console.log("unlock called");
        
        if(passcode === this.passcode) {
            console.log("unlocked");
            
            this.isLocked = false;
            return true;
        }
        console.log("failed to unlock");
        
        return false;
    }

    get getIsLocked() {
        return this.isLocked;
    }

    get getCurrentPasscode() {
        return this.currentPasscode;
    }
    
    set setCurrentPasscode(passcode: string) {
        this.currentPasscode = passcode;
    }
}