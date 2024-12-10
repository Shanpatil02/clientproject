import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    sub = "sub",
        Label6 = "Label6",
        V_Park = "V_Park",
        Radio_Button3 = "Radio_Button3",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Park(): FormControl {
        return this.fg.controls[MgControlName.V_Park] as FormControl;
    }

    get Radio_Button3(): FormControl {
        return this.fg.controls[MgControlName.Radio_Button3] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}