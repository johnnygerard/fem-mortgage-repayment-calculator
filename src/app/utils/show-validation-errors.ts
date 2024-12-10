import { AbstractControl } from "@angular/forms";

export const showValidationErrors = (
  control: AbstractControl,
  isFormSubmitted: boolean,
): boolean =>
  control.invalid && (control.touched || control.dirty || isFormSubmitted);
