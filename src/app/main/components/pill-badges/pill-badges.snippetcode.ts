import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodePillBadges: SnippetCode = {
  html: `
  <div class="badge badge-pill badge-primary">Primary</div>
  <div class="badge badge-pill badge-secondary">Secondary</div>
  <div class="badge badge-pill badge-success">Success</div>
  <div class="badge badge-pill badge-danger">Danger</div>
  <div class="badge badge-pill badge-warning">Warning</div>
  <div class="badge badge-pill badge-info">Info</div>
  <div class="badge badge-pill badge-dark">Dark</div>
`
};

export const snippetCodeGlowBadges: SnippetCode = {
  html: `
  <div class="badge badge-pill badge-glow badge-primary">Primary</div>
  <div class="badge badge-pill badge-glow badge-secondary">Secondary</div>
  <div class="badge badge-pill badge-glow badge-success">Success</div>
  <div class="badge badge-pill badge-glow badge-danger">Danger</div>
  <div class="badge badge-pill badge-glow badge-warning">Warning</div>
  <div class="badge badge-pill badge-glow badge-info">Info</div>
  <div class="badge badge-pill badge-glow badge-dark">Dark</div>
`
};

export const snippetCodeLightBadges: SnippetCode = {
  html: `
  <div class="badge badge-pill badge-light-primary">Primary</div>
  <div class="badge badge-pill badge-light-secondary">Secondary</div>
  <div class="badge badge-pill badge-light-success">Success</div>
  <div class="badge badge-pill badge-light-danger">Danger</div>
  <div class="badge badge-pill badge-light-warning">Warning</div>
  <div class="badge badge-pill badge-light-info">Info</div>
  <div class="badge badge-pill badge-light-dark">Dark</div>
`
};

export const snippetCodePillNotification: SnippetCode = {
  html: `
<div class="position-relative d-inline-block">
  <span [appDataFeather]="'bell'" [class]="'font-medium-5 text-primary'"></span>
  <span class="badge badge-pill badge-primary badge-up">4</span>
</div>
<div class="position-relative d-inline-block">
  <span [appDataFeather]="'bell'" [class]="'font-medium-5 text-info'"></span>
  <span class="badge badge-pill badge-info badge-up">5</span>
</div>
<div class="position-relative d-inline-block">
  <span [appDataFeather]="'bell'" [class]="'font-medium-5 text-danger'"></span>
  <span class="badge badge-pill badge-danger badge-glow badge-up">6</span>
</div>
`
};
export const snippetCodeBadgePillLink: SnippetCode = {
  html: `
  <a class="badge badge-pill badge-primary" href="https://example.com" target="_blank"
  ><i appDataFeather="link" class="mr-25"></i> Primary</a>
`
};

export const snippetCodeBlockBadgePill: SnippetCode = {
  html: `
  <div class="badge badge-pill d-block badge-danger">
    <span>Block Badge Pill</span>
  </div>
`
};
