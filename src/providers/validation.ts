

import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationProvider {

    constructor(private decimalPipe: DecimalPipe) {}

    twoDecimals(number) {
        return this.decimalPipe.transform(number, '1.2-2');
    }
}