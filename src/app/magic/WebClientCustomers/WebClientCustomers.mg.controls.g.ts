import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WebClientCustomers = "WebClientCustomers",
        V_MainVar = "V_MainVar",
        Button53 = "Button53",
        Button54 = "Button54",
        Table24 = "Table24",
        Column36 = "Column36",
        Customers_CustomerID = "Customers_CustomerID",
        Column37 = "Column37",
        Customers_CompanyName = "Customers_CompanyName",
        Column47 = "Column47",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column36',
        'Column37',
        'Column47',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_MainVar(): FormControl {
        return this.fg.controls[MgControlName.V_MainVar] as FormControl;
    }

    get Customers_CustomerID(): FormControl {
        return this.getTableChildFormControl(MgControlName.Customers_CustomerID);
    }

    get Customers_CompanyName(): FormControl {
        return this.getTableChildFormControl(MgControlName.Customers_CompanyName);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}