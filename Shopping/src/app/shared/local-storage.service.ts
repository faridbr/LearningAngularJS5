export interface Backup {
      [index: string]: string
}

export class LocalStorageService {
    
    isSupported(){
        try {
            let itemBackup = localStorage.getItem("");
            localStorage.removeItem("");
            localStorage.setItem("", itemBackup);
            if (itemBackup === null) localStorage.removeItem("");
            else localStorage.setItem("", itemBackup);
            return true;
        } catch (e) {
            return false;
        } 
    }

    hasItem(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    getItem(key: string): any {
        return localStorage.getItem(key);
    }

    getRemainingSpace(): number {
        let itemBackup = localStorage.getItem("");
        let increase = true;
        let data = "1";
        let totalData = "";
        let trytotalData = "";
        while (true) {
            try {
                trytotalData = totalData + data;
                localStorage.setItem("", trytotalData);
                totalData = trytotalData;
                if (increase) data += data;
            } catch (e) {
                if (data.length < 2) {
                    break;
                }
                increase = false;
                data = data.substr(data.length / 2);
            }
        }
        if (itemBackup === null) localStorage.removeItem("");
        else localStorage.setItem("", itemBackup);

        return totalData.length;
    }

    getMaximumSpace(): number {
        let backup = this.getBackup();
        localStorage.clear();
        let max = this.getRemainingSpace();
        this.applyBackup(backup);
        return max;
    }

    getUsedSpace(): number {
        let sum = 0;

        for (let i = 0; i < localStorage.length; ++i) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            sum += key.length + value.length;
        }

        return sum;
    }

    getItemUsedSpace(key: string): number {
        let value = localStorage.getItem(key);
        if (value === null) {
            return NaN;
        } else {
            return key.length + value.length;
        }
    }

    getBackup(): Backup {
        let backup: Backup = {};

        for (let i = 0; i < localStorage.length; ++i) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            backup[key] = value;
        }

        return backup;
    }

    applyBackup(backup: Backup, fClear: boolean = true, fOverwriteExisting: boolean = true) {
        if (fClear == true) {
            localStorage.clear();
        }

        for (let key in backup) {
            if (fOverwriteExisting === false && backup[key] !== undefined) {
                continue;
            }
            let value = backup[key];
            localStorage.setItem(key, value);
        }
    }

    consoleInfo(fShowMaximumSize: boolean = false) {
        let amount = 0;
        let size = 0;

        for (let i = 0; i < localStorage.length; ++i) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log(amount, key, value);
            size += key.length + value.length;
            amount++;
        }
        console.log("Total entries:", amount);
        console.log("Total size:", size);
        if (fShowMaximumSize === true) {
            let maxSize = this.getMaximumSpace();
            console.log("Total size:", maxSize);
        }
    }
  }