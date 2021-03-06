/**
 * LockService Class is the service class for this project
 */

export class LockService {
    private isLocked: boolean = true;
    private currentPasscode: string = '000'; // default current passcode

    constructor(private passcode: string) {}

    // Lock padlock
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


    // Getters and Setters
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