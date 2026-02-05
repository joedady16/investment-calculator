import { FormsModule } from "@angular/forms";
import { InvestmentResults } from "./investment-results/investment-results";
//import { UserInput } from "./user-input/user-input";
import { Header } from "./header/header";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { App } from "./app";
//import { UserInput } from "./user-input/user-input";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
  declarations: [
    App,
    Header,
    InvestmentResults,
  ],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [App],
})
export class AppModule {}