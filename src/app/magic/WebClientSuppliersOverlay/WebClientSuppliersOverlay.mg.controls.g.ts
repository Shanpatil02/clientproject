import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WebClientSuppliersOverlay = "WebClientSuppliersOverlay",
        Table24 = "Table24",
        Column37 = "Column37",
        Suppliers_SupplierID = "Suppliers_SupplierID",
        Column38 = "Column38",
        Suppliers_CompanyName = "Suppliers_CompanyName",
        Column39 = "Column39",
        Suppliers_ContactName = "Suppliers_ContactName",
        Column40 = "Column40",
        Suppliers_ContactTitle = "Suppliers_ContactTitle",
        Column41 = "Column41",
        Suppliers_Address = "Suppliers_Address",
        Column42 = "Column42",
        Suppliers_City = "Suppliers_City",
        Column43 = "Column43",
        Suppliers_Region = "Suppliers_Region",
        Column44 = "Column44",
        Suppliers_PostalCode = "Suppliers_PostalCode",
        Column45 = "Column45",
        Suppliers_Country = "Suppliers_Country",
        Column46 = "Column46",
        Suppliers_Phone = "Suppliers_Phone",
        Column47 = "Column47",
        Suppliers_Fax = "Suppliers_Fax",
        Column48 = "Column48",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column37',
        'Column38',
        'Column39',
        'Column40',
        'Column41',
        'Column42',
        'Column43',
        'Column44',
        'Column45',
        'Column46',
        'Column47',
        'Column48',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Suppliers_SupplierID(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_SupplierID);
    }

    get Suppliers_CompanyName(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_CompanyName);
    }

    get Suppliers_ContactName(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_ContactName);
    }

    get Suppliers_ContactTitle(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_ContactTitle);
    }

    get Suppliers_Address(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_Address);
    }

    get Suppliers_City(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_City);
    }

    get Suppliers_Region(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_Region);
    }

    get Suppliers_PostalCode(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_PostalCode);
    }

    get Suppliers_Country(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_Country);
    }

    get Suppliers_Phone(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_Phone);
    }

    get Suppliers_Fax(): FormControl {
        return this.getTableChildFormControl(MgControlName.Suppliers_Fax);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}