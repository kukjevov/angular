export declare abstract class AbstractControl {
    asyncValidator: AsyncValidatorFn;
    dirty: boolean;
    errors: {
        [key: string]: any;
    };
    pending: boolean;
    pristine: boolean;
    root: AbstractControl;
    status: string;
    statusChanges: Observable<any>;
    touched: boolean;
    untouched: boolean;
    valid: boolean;
    validator: ValidatorFn;
    value: any;
    valueChanges: Observable<any>;
    constructor(validator: ValidatorFn, asyncValidator: AsyncValidatorFn);
    clearAsyncValidators(): void;
    clearValidators(): void;
    find(path: Array<string | number> | string): AbstractControl;
    getError(errorCode: string, path?: string[]): any;
    hasError(errorCode: string, path?: string[]): boolean;
    markAsDirty({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    markAsPending({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    markAsTouched(): void;
    setAsyncValidators(newValidator: AsyncValidatorFn | AsyncValidatorFn[]): void;
    setErrors(errors: {
        [key: string]: any;
    }, {emitEvent}?: {
        emitEvent?: boolean;
    }): void;
    setParent(parent: FormGroup | FormArray): void;
    setValidators(newValidator: ValidatorFn | ValidatorFn[]): void;
    updateValueAndValidity({onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare abstract class AbstractControlDirective {
    control: AbstractControl;
    dirty: boolean;
    errors: {
        [key: string]: any;
    };
    path: string[];
    pristine: boolean;
    statusChanges: Observable<any>;
    touched: boolean;
    untouched: boolean;
    valid: boolean;
    value: any;
    valueChanges: Observable<any>;
}

export interface AsyncValidatorFn {
    (c: AbstractControl): any;
}

export declare class CheckboxControlValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    writeValue(value: any): void;
}

export declare class ControlContainer extends AbstractControlDirective {
    formDirective: Form;
    name: string;
    path: string[];
}

export interface ControlValueAccessor {
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(obj: any): void;
}

export declare class DefaultValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(value: any): void;
}

export declare function disableDeprecatedForms(): any[];

export interface Form {
    addControl(dir: NgControl): void;
    addFormGroup(dir: AbstractFormGroupDirective): void;
    getControl(dir: NgControl): FormControl;
    getFormGroup(dir: AbstractFormGroupDirective): FormGroup;
    removeControl(dir: NgControl): void;
    removeFormGroup(dir: AbstractFormGroupDirective): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare const FORM_DIRECTIVES: Type[];

export declare const FORM_PROVIDERS: Type[];

export declare class FormArray extends AbstractControl {
    controls: AbstractControl[];
    length: number;
    constructor(controls: AbstractControl[], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn);
    at(index: number): AbstractControl;
    insert(index: number, control: AbstractControl): void;
    push(control: AbstractControl): void;
    removeAt(index: number): void;
}

export declare class FormBuilder {
    array(controlsConfig: any[], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn): FormArray;
    control(value: Object, validator?: ValidatorFn | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl;
    group(controlsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    }): FormGroup;
}

export declare class FormControl extends AbstractControl {
    constructor(value?: any, validator?: ValidatorFn | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]);
    registerOnChange(fn: Function): void;
    updateValue(value: any, {onlySelf, emitEvent, emitModelToViewChange}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
    }): void;
}

export declare class FormControlDirective extends NgControl implements OnChanges {
    asyncValidator: AsyncValidatorFn;
    control: FormControl;
    form: FormControl;
    model: any;
    path: string[];
    update: EventEmitter<{}>;
    validator: ValidatorFn;
    viewModel: any;
    constructor(_validators: any[], _asyncValidators: any[], valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class FormControlName extends NgControl implements OnChanges, OnDestroy {
    asyncValidator: AsyncValidatorFn;
    control: FormControl;
    formDirective: any;
    model: any;
    name: string;
    path: string[];
    update: EventEmitter<{}>;
    validator: ValidatorFn;
    constructor(_parent: ControlContainer, _validators: any[], _asyncValidators: any[], valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class FormGroup extends AbstractControl {
    controls: {
        [key: string]: AbstractControl;
    };
    constructor(controls: {
        [key: string]: AbstractControl;
    }, optionals?: {
        [key: string]: boolean;
    }, validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn);
    addControl(name: string, control: AbstractControl): void;
    contains(controlName: string): boolean;
    exclude(controlName: string): void;
    include(controlName: string): void;
    registerControl(name: string, control: AbstractControl): AbstractControl;
    removeControl(name: string): void;
}

export declare class FormGroupDirective extends ControlContainer implements Form, OnChanges {
    control: FormGroup;
    directives: NgControl[];
    form: FormGroup;
    formDirective: Form;
    ngSubmit: EventEmitter<{}>;
    path: string[];
    submitted: boolean;
    constructor(_validators: any[], _asyncValidators: any[]);
    addControl(dir: NgControl): void;
    addFormGroup(dir: FormGroupName): void;
    getControl(dir: NgControl): FormControl;
    getFormGroup(dir: FormGroupName): FormGroup;
    ngOnChanges(changes: SimpleChanges): void;
    onSubmit(): boolean;
    removeControl(dir: NgControl): void;
    removeFormGroup(dir: FormGroupName): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class FormGroupName extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string;
    constructor(parent: ControlContainer, validators: any[], asyncValidators: any[]);
}

export declare class MaxLengthValidator implements Validator {
    constructor(maxLength: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}

export declare class MinLengthValidator implements Validator {
    constructor(minLength: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}

export declare const NG_ASYNC_VALIDATORS: OpaqueToken;

export declare const NG_VALIDATORS: OpaqueToken;

export declare const NG_VALUE_ACCESSOR: OpaqueToken;

export declare abstract class NgControl extends AbstractControlDirective {
    asyncValidator: AsyncValidatorFn;
    name: string;
    validator: ValidatorFn;
    valueAccessor: ControlValueAccessor;
    abstract viewToModelUpdate(newValue: any): void;
}

export declare class NgControlStatus {
    ngClassDirty: boolean;
    ngClassInvalid: boolean;
    ngClassPristine: boolean;
    ngClassTouched: boolean;
    ngClassUntouched: boolean;
    ngClassValid: boolean;
    constructor(cd: NgControl);
}

export declare class NgForm extends ControlContainer implements Form {
    control: FormGroup;
    controls: {
        [key: string]: AbstractControl;
    };
    form: FormGroup;
    formDirective: Form;
    ngSubmit: EventEmitter<{}>;
    path: string[];
    submitted: boolean;
    constructor(validators: any[], asyncValidators: any[]);
    addControl(dir: NgModel): void;
    addFormGroup(dir: NgModelGroup): void;
    getControl(dir: NgModel): FormControl;
    getFormGroup(dir: NgModelGroup): FormGroup;
    onSubmit(): boolean;
    removeControl(dir: NgModel): void;
    removeFormGroup(dir: NgModelGroup): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class NgModel extends NgControl implements OnChanges, OnDestroy {
    asyncValidator: AsyncValidatorFn;
    control: FormControl;
    formDirective: any;
    model: any;
    name: string;
    options: {
        name?: string;
        standalone?: boolean;
    };
    path: string[];
    update: EventEmitter<{}>;
    validator: ValidatorFn;
    viewModel: any;
    constructor(_parent: ControlContainer, _validators: any[], _asyncValidators: any[], valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class NgModelGroup extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string;
    constructor(parent: ControlContainer, validators: any[], asyncValidators: any[]);
}

export declare class NgSelectOption implements OnDestroy {
    id: string;
    ngValue: any;
    value: any;
    constructor(_element: ElementRef, _renderer: Renderer, _select: SelectControlValueAccessor);
    ngOnDestroy(): void;
}

export declare class PatternValidator implements Validator {
    constructor(pattern: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}

export declare function provideForms(): any[];

export declare const REACTIVE_FORM_DIRECTIVES: Type[];

export declare class RequiredValidator {
}

export declare class SelectControlValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
}

export interface Validator {
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}

export interface ValidatorFn {
    (c: AbstractControl): {
        [key: string]: any;
    };
}

export declare class Validators {
    static compose(validators: ValidatorFn[]): ValidatorFn;
    static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn;
    static maxLength(maxLength: number): ValidatorFn;
    static minLength(minLength: number): ValidatorFn;
    static nullValidator(c: AbstractControl): {
        [key: string]: boolean;
    };
    static pattern(pattern: string): ValidatorFn;
    static required(control: AbstractControl): {
        [key: string]: boolean;
    };
}
