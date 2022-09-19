import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBadge: SnippetCode = {
  html: `
  <div class="badge badge-primary">Primary</div>
  <div class="badge badge-secondary">Secondary</div>
  <div class="badge badge-success">Success</div>
  <div class="badge badge-danger">Danger</div>
  <div class="badge badge-warning">Warning</div>
  <div class="badge badge-info">Info</div>
  <div class="badge badge-dark">Dark</div>
  `
};

export const snippetCodeGlowBadge: SnippetCode = {
  html: `
  <div class="badge badge-glow badge-primary">Primary</div>
  <div class="badge badge-glow badge-secondary">Secondary</div>
  <div class="badge badge-glow badge-success">Success</div>
  <div class="badge badge-glow badge-danger">Danger</div>
  <div class="badge badge-glow badge-warning">Warning</div>
  <div class="badge badge-glow badge-info">Info</div>
  <div class="badge badge-glow badge-dark">Dark</div>
  `
};

export const snippetCodeLightBadge: SnippetCode = {
  html: `
  <div class="badge badge-light-primary">Primary</div>
  <div class="badge badge-light-secondary">Secondary</div>
  <div class="badge badge-light-success">Success</div>
  <div class="badge badge-light-danger">Danger</div>
  <div class="badge badge-light-warning">Warning</div>
  <div class="badge badge-light-info">Info</div>
  <div class="badge badge-light-dark">Dark</div>
  `
};

export const snippetCodeWithIcons: SnippetCode = {
  html: `
<div class="badge badge-primary">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Primary</span>
</div>
<div class="badge badge-secondary">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Secondary</span>
</div>
<div class="badge badge-success">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Success</span>
</div>
<div class="badge badge-danger">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Danger</span>
</div>
<div class="badge badge-warning">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Warning</span>
</div>
<div class="badge badge-info">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Info</span>
</div>
<div class="badge badge-dark">
  <i appDataFeather="star" class="mr-25"></i>
  <span>Info</span>
</div>
  `
};

export const snippetCodeLink: SnippetCode = {
  html: `
<div class="badge badge-primary">
  <a href="https://example.com/" target="_blank">
    <span [appDataFeather]="'link'" [class]="'mr-25'"></span>
    <span>Link Badge</span>
  </a>
</div>
  `
};

export const snippetCodeBlockWithLink: SnippetCode = {
  html: `
<div class="badge d-block badge-primary">
  <span>Badge</span>
</div>
  `
};
