import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WebClientSuppliersOverlay.mg.controls.g";
import { MgDisplayedColumns } from "./WebClientSuppliersOverlay.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-WebClientSuppliersOverlay_WebClientSuppliersOverlay',
    providers: [...matMagicProviders],
    templateUrl: './WebClientSuppliersOverlay.component.html'
})
export class WebClientSuppliersOverlay extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "WebClientSuppliersOverlay";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return WebClientSuppliersOverlay.x;
    }
    Y() {
        return WebClientSuppliersOverlay.y;
    }
    Width(): string {
        return WebClientSuppliersOverlay.width;
    }
    Height(): string {
        return WebClientSuppliersOverlay.height;
    }
    IsCenteredToWindow() {
        return WebClientSuppliersOverlay.isCenteredToWindow;
    }
    FormName() {
        return WebClientSuppliersOverlay.formName;
    }
    ShowTitleBar() {
        return WebClientSuppliersOverlay.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WebClientSuppliersOverlay.shouldCloseOnBackgroundClick;
    }
    override displayedColumns = this.mgdp;
}