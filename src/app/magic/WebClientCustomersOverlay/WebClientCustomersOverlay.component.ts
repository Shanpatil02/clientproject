import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WebClientCustomersOverlay.mg.controls.g";
import { MgDisplayedColumns } from "./WebClientCustomersOverlay.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-WebClientCustomersOverlay_WebClientCustomersOverlay',
    providers: [...matMagicProviders],
    templateUrl: './WebClientCustomersOverlay.component.html'
})
export class WebClientCustomersOverlay extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "WebClientCustomersOverlay";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return WebClientCustomersOverlay.x;
    }
    Y() {
        return WebClientCustomersOverlay.y;
    }
    Width(): string {
        return WebClientCustomersOverlay.width;
    }
    Height(): string {
        return WebClientCustomersOverlay.height;
    }
    IsCenteredToWindow() {
        return WebClientCustomersOverlay.isCenteredToWindow;
    }
    FormName() {
        return WebClientCustomersOverlay.formName;
    }
    ShowTitleBar() {
        return WebClientCustomersOverlay.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WebClientCustomersOverlay.shouldCloseOnBackgroundClick;
    }
    override displayedColumns = this.mgdp;
}