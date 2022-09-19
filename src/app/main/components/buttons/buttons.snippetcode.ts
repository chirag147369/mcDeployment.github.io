import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeFilled: SnippetCode = {
  html: `
  <button type="button" class="btn btn-primary" appRippleEffect>Primary</button
  ><button type="button" class="btn btn-secondary" appRippleEffect>Secondary</button
  ><button type="button" class="btn btn-success" appRippleEffect>Success</button
  ><button type="button" class="btn btn-danger" appRippleEffect>Danger</button
  ><button type="button" class="btn btn-warning" appRippleEffect>Warning</button
  ><button type="button" class="btn btn-info" appRippleEffect>Info</button
  ><button type="button" class="btn btn-dark" appRippleEffect>Dark</button>
  `
};
export const snippetCodeBorder: SnippetCode = {
  html: `
  <button type="button" class="btn btn-outline-primary" appRippleEffect>Primary</button
  ><button type="button" class="btn btn-outline-secondary" appRippleEffect>Secondary</button
  ><button type="button" class="btn btn-outline-success" appRippleEffect>Success</button
  ><button type="button" class="btn btn-outline-danger" appRippleEffect>Danger</button
  ><button type="button" class="btn btn-outline-warning" appRippleEffect>Warning</button
  ><button type="button" class="btn btn-outline-info" appRippleEffect>Info</button
  ><button type="button" class="btn btn-outline-dark" appRippleEffect>Dark</button>
  `
};
export const snippetCodeFlat: SnippetCode = {
  html: `
  <button type="button" class="btn btn-flat-primary" appRippleEffect>Primary</button
  ><button type="button" class="btn btn-flat-secondary" appRippleEffect>Secondary</button
  ><button type="button" class="btn btn-flat-success" appRippleEffect>Success</button
  ><button type="button" class="btn btn-flat-danger" appRippleEffect>Danger</button
  ><button type="button" class="btn btn-flat-warning" appRippleEffect>Warning</button
  ><button type="button" class="btn btn-flat-info" appRippleEffect>Info</button
  ><button type="button" class="btn btn-flat-dark" appRippleEffect>Dark</button>
  `
};
export const snippetCodeGradient: SnippetCode = {
  html: `
  <button type="button" class="btn btn-gradient-primary">Primary</button
  ><button type="button" class="btn btn-gradient-secondary">Secondary</button
  ><button type="button" class="btn btn-gradient-success">Success</button
  ><button type="button" class="btn btn-gradient-danger">Danger</button
  ><button type="button" class="btn btn-gradient-warning">Warning</button
  ><button type="button" class="btn btn-gradient-info">Info</button
  ><button type="button" class="btn btn-gradient-dark">Dark</button>
  `
};
export const snippetCodeRelief: SnippetCode = {
  html: `
  <button type="button" class="btn btn-relief-primary">Primary</button
  ><button type="button" class="btn btn-relief-secondary">Secondary</button
  ><button type="button" class="btn btn-relief-success">Success</button
  ><button type="button" class="btn btn-relief-danger">Danger</button
  ><button type="button" class="btn btn-relief-warning">Warning</button
  ><button type="button" class="btn btn-relief-info">Info</button
  ><button type="button" class="btn btn-relief-dark">Dark</button>
  `
};
export const snippetCodeRoundbuttons: SnippetCode = {
  html: `
  <button type="button" class="btn btn-outline-primary round" appRippleEffect>Primary</button
  ><button type="button" class="btn btn-outline-secondary round" appRippleEffect>Secondary</button
  ><button type="button" class="btn btn-outline-success round" appRippleEffect>Success</button
  ><button type="button" class="btn btn-outline-danger round" appRippleEffect>Danger</button
  ><button type="button" class="btn btn-outline-warning round" appRippleEffect>Warning</button
  ><button type="button" class="btn btn-outline-info round" appRippleEffect>Info</button
  ><button type="button" class="btn btn-outline-dark round" appRippleEffect>Dark</button>
  `
};
export const snippetCodeIcon: SnippetCode = {
  html: `
<button type="button" class="btn btn-outline-primary" appRippleEffect>
  <span [appDataFeather]="'home'" [class]="'mr-25'"></span>Home</button
><button type="button" class="btn btn-warning" appRippleEffect>
  <span [appDataFeather]="'star'" [class]="'mr-25'"></span>Star</button
><button type="button" class="btn btn-flat-success" appRippleEffect>
  <span [appDataFeather]="'check'" [class]="'mr-25'"></span>Done</button
><button type="button" class="btn btn-outline-primary" appRippleEffect disabled>
  <span [appDataFeather]="'home'" [class]="'mr-25'"></span>Home
</button>
  `
};
export const snippetCodeIconOnly: SnippetCode = {
  html: `
<button type="button" class="btn btn-icon btn-outline-primary" appRippleEffect>
  <span [appDataFeather]="'search'"></span></button
>
<button type="button" class="btn btn-icon btn-warning" appRippleEffect>
  <span [appDataFeather]="'inbox'"></span></button
>
<button type="button" class="btn btn-icon btn-flat-success" appRippleEffect>
  <span [appDataFeather]="'camera'"></span></button
>
<button type="button" class="btn btn-icon btn-outline-primary" appRippleEffect disabled>
  <span [appDataFeather]="'search'"></span></button
>
<button type="button" class="btn btn-icon rounded-circle btn-outline-primary" appRippleEffect>
  <span [appDataFeather]="'search'"></span></button
>
<button type="button" class="btn btn-icon btn-icon rounded-circle btn-warning" appRippleEffect>
  <span [appDataFeather]="'inbox'"></span></button
>
<button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-success" appRippleEffect>
  <span [appDataFeather]="'camera'"></span></button
>
<button
  type="button"
  class="btn btn-icon btn-icon rounded-circle btn-outline-primary"
  appRippleEffect
  disabled>
  <span [appDataFeather]="'search'"></span>
</button>
  `
};
export const snippetCodeBasicButtongroup: SnippetCode = {
  html: `
  <div class="row">
  <div class="col-lg-6 col-12 mb-1 mb-lg-0">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" appRippleEffect>Left</button
      ><button type="button" class="btn btn-primary" appRippleEffect>Middle</button
      ><button type="button" class="btn btn-primary" appRippleEffect>Right</button>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-outline-primary" appRippleEffect>
        <span [appDataFeather]="'facebook'"></span></button>
      <button type="button" class="btn btn-outline-primary" appRippleEffect>
        <span [appDataFeather]="'twitter'"></span></button>
      <button type="button" class="btn btn-outline-primary" appRippleEffect>
        <span [appDataFeather]="'instagram'"></span>
      </button>
    </div>
  </div>
</div>
  `
};
export const snippetCodeRadioButtonStyle: SnippetCode = {
  html: `
  <div class="row">
  <div class="col-lg-6 col-12 mb-1 mb-lg-0">
    <div class="btn-group btn-group-toggle">
      <label class="btn-primary" ngbButtonLabel appRippleEffect
        ><input type="checkbox" ngbButton [(ngModel)]="checkboxModel.left" />Active </label>
      <label class="btn-primary" ngbButtonLabel appRippleEffect
        ><input type="checkbox" ngbButton [(ngModel)]="checkboxModel.middle" />Checkbox </label>
      <label class="btn-primary" ngbButtonLabel appRippleEffect>
        <input type="checkbox" ngbButton [(ngModel)]="checkboxModel.right" />Checkbox</label>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="btn-group btn-group-toggle" ngbRadioGroup name="radioBasic" [(ngModel)]="radioModel">
      <label ngbButtonLabel class="btn-outline-primary" appRippleEffect
        ><input ngbButton type="radio" [value]="1" />Active </label>
      <label ngbButtonLabel class="btn-outline-primary" appRippleEffect
        ><input ngbButton type="radio" value="middle" />Radio </label>
      <label ngbButtonLabel class="btn-outline-primary" appRippleEffect
        ><input ngbButton type="radio" [value]="false" />Radio
      </label>
    </div>
  </div>
</div>
  `,
  ts: `
  radioModel = 1;
  checkboxModel = {
    left: true,
    middle: false,
    right: false
  };
`
};
export const snippetCodeSizes: SnippetCode = {
  html: `
  <!-- button sizes -->
  <button type="button" class="btn btn-primary btn-lg" appRippleEffect>Large</button>
  <button type="button" class="btn btn-primary" appRippleEffect>Default</button>
  <button type="button" class="btn btn-primary btn-sm" appRippleEffect>Small</button>
  <!--/ button sizes -->

  <!-- button outline sizes -->
  <button type="button" class="btn btn-outline-primary btn-lg" appRippleEffect>Large</button>
  <button type="button" class="btn btn-outline-primary" appRippleEffect>Default</button>
  <button type="button" class="btn btn-outline-primary btn-sm" appRippleEffect>Small</button>
  <!--/ button outline sizes -->
  `
};
export const snippetCodeBlocklevelbuttons: SnippetCode = {
  html: `
<div class="col-lg-6 col-md-12">
  <div class="form-group">
    <button type="button" class="btn btn-primary btn-block" appRippleEffect>Block level button</button>
  </div>
</div>
<div class="col-lg-6 col-md-12">
  <div class="form-group">
    <button type="button" class="btn btn-outline-primary btn-block" appRippleEffect>
      Block level button
    </button>
  </div>
</div>
  `
};
export const snippetCodeButtontags: SnippetCode = {
  html: `
  <ngb-alert [type]="'warning'" class="mb-0" [dismissible]="false">
  <div class="alert-body">
    <strong>Note:</strong>on click of "External Link" & "Router Link" button will redirect you to another
    page.
  </div>
  </ngb-alert>

  <a class="btn btn-primary" href="https://example.com/" role="button" target="_blank" appRippleEffect
    >External Link</a
  ><button class="btn btn-primary" [routerLink]="['/pages/login']" type="button" appRippleEffect>
    Router Link</button
  ><button class="btn btn-primary" type="submit" appRippleEffect>Button</button
  ><input class="btn btn-primary" type="button" value="Input" appRippleEffect /><input
    class="btn btn-primary"
    type="submit"
    value="Submit"
    appRippleEffect
  />

  `
};
