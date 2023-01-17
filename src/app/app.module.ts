import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {QuestionnairesComponent} from './questionnaires/questionnaires.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpInterceptorService} from "./interceptors/http-interceptor.service";
import {LoginComponent} from './auth/login/login.component';
import {UserComponent} from './user/user.component';
import {UserCreateComponent} from "./user/user-create/user-create.component";
import {UserOverviewComponent} from "./user/user-overview/user-overview.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RequestTokenComponent} from './reset-password/request-token/request-token.component';
import {ToastsContainer} from "./shared/toast/toasts-container.component";
import { QuestionnaireFillComponent } from './questionnaire-fill/questionnaire-fill.component';
import { EntryFormComponent } from './shared/form/entry/entry-form.component';
import { EntryFormQuestionComponent } from './shared/form/entry/entry-form-question.component';
import { EntryFormService } from './service/entry-form.service';
import { QuestionControlService } from './shared/form/question-controle.service';
import {ErrorInterceptorService} from "./interceptors/error-interceptor.service";
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { EntriesComponent } from './entries/entries.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    QuestionnairesComponent,
    UserComponent,
    UserCreateComponent,
    UserOverviewComponent,
    UserEditComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    RequestTokenComponent,
    QuestionnaireFillComponent,
    EntryFormQuestionComponent,
    EntryFormComponent,
    UserDeleteComponent,
    EntriesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastsContainer,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    EntryFormService,
    QuestionControlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
