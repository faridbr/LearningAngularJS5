import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class ProjectValidators {

    static projectNameValidator(control: FormControl):{[s: string]: boolean}{
        if(control.value === 'test')
            return {'projectNameForbidden': true};
        else    
            return null;
    }

    static asyncProjectNameValidator(control: FormControl): Observable<any> | Promise<any>{
        const promise = new Promise<any>((resolve, reject)=>{
            setTimeout(() => {
                if(control.value === 'testproject')
                    resolve({'projectNameForbidden': true})
                else    
                    resolve(null);
            }, 3000);
        });
        return promise;
    }
}