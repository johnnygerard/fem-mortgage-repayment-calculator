import { Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Pipe({ name: "error" })
export class ErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors): string {
    if (errors["required"]) return "This field is required";
    if (errors["min"]) return `Value must be at least ${errors["min"].min}`;
    if (errors["max"]) return `Value must be at most ${errors["max"].max}`;
    throw new Error("Unexpected error");
  }
}
