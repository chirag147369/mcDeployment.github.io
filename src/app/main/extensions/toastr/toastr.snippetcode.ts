import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeTypes: SnippetCode = {
  html: `
<!-- toastr Success -->
<button class="btn btn-outline-success mr-1" (click)="toastrSuccess()" appRippleEffect>Success</button>

<!-- toastr Info -->
<button class="btn btn-outline-info mr-1" (click)="toastrInfo()" appRippleEffect>Info</button>

<!-- toastr Warning -->
<button class="btn btn-outline-warning mr-1" (click)="toastrWarning()" appRippleEffect>Warning</button>

<!-- toastr Error -->
<button class="btn btn-outline-danger" (click)="toastrError()" appRippleEffect>Error</button>
`,
  ts: `
  // Success
  toastrSuccess() {
    this.toastr.success('👋 Jelly-o macaroon brownie tart ice cream croissant jelly-o apple pie.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Info
  toastrInfo() {
    this.toastr.info('👋 Chupa chups biscuit brownie gummi sugar plum caramels.', 'Info!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Warning
  toastrWarning() {
    this.toastr.warning('👋 Icing cake pudding carrot cake jujubes tiramisu chocolate cake.', 'Warning!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Error
  toastrError() {
    this.toastr.error('👋 Jelly-o marshmallow marshmallow cotton candy dessert candy.', 'Danger!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

`
};

export const snippetCodeTopPositions: SnippetCode = {
  html: `
  <!-- toastr Top Left -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrTopLeft()" appRippleEffect>Top Left</button>

  <!-- toastr Top Center -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrTopCenter()" appRippleEffect>Top Center</button>

  <!-- toastr Top Right -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrTopRight()" appRippleEffect>Top Right</button>

  <!-- toastr Top Full Width -->
  <button class="btn btn-outline-primary" (click)="toastrTopFullWidth()" appRippleEffect>Top Full Width</button>
  `,
  ts: `
  // Top Left
  toastrTopLeft() {
    this.toastr.info('I do not think that word means what you think it means.', 'Top Left!', {
      positionClass: 'toast-top-left',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Top Center
  toastrTopCenter() {
    this.toastr.info('I do not think that word means what you think it means.', 'Top Center!', {
      positionClass: 'toast-top-center',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Top Right
  toastrTopRight() {
    this.toastr.info('I do not think that word means what you think it means.', 'Top Right!', {
      positionClass: 'toast-top-right',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Top Fullwidth
  toastrTopFullWidth() {
    this.toastr.info('I do not think that word means what you think it means.', 'Top Full Width!', {
      positionClass: 'toast-top-full-width',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }
  `
};

export const snippetCodeBottomPositions: SnippetCode = {
  html: `
  <!-- toastr Bottom Left -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrBottomLeft()" appRippleEffect>Bottom Left</button>

  <!-- toastr Bottom Center -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrBottomCenter()" appRippleEffect>Bottom Center</button>

  <!-- toastr Bottom Right -->
  <button class="btn btn-outline-primary mr-1" (click)="toastrBottomRight()" appRippleEffect>Bottom Right</button>

  <!-- toastr Bottom Full Width -->
  <button class="btn btn-outline-primary" (click)="toastrBottomFullWidth()" appRippleEffect>Bottom Full Width</button>
  `,
  ts: `
  // Bottom Left
  toastrBottomLeft() {
    this.toastr.info('I do not think that word means what you think it means.', 'Bottom Left!', {
      positionClass: 'toast-bottom-left',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Bottom Center
  toastrBottomCenter() {
    this.toastr.info('I do not think that word means what you think it means.', 'Bottom Center!', {
      positionClass: 'toast-bottom-center',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Bottom Right
  toastrBottomRight() {
    this.toastr.info('I do not think that word means what you think it means.', 'Bottom Right!', {
      positionClass: 'toast-bottom-right',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Bottom Fullwidth
  toastrBottomFullWidth() {
    this.toastr.info('I do not think that word means what you think it means.', 'Bottom Full Width!', {
      positionClass: 'toast-bottom-full-width',
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }
  `
};

export const snippetCodeOptions: SnippetCode = {
  html: `
  <!-- toastr Progress Bar -->
  <button class="btn btn-outline-primary" (click)="toastrProgressBar()" appRippleEffect>Progress Bar</button>

  <!-- toastr Clear Toast Button -->
  <button class="btn btn-outline-danger" (click)="toastrClearToastButton()" appRippleEffect>Clear Toast Button</button>
  `,
  ts: `
  // Progress Bar
  toastrProgressBar() {
    this.toastr.success('Have fun storming the castle!', 'Progress Bar', {
      progressBar: true,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Clear Toast Button
  toastrClearToastButton() {
    this.toastr.info('Clear itself?<br><br><span class="btn btn-info clear">Yes</span>', 'Clear Toast Button', {
      enableHtml: true,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }
  `
};

export const snippetCodeRemove: SnippetCode = {
  html: `
<button class="btn btn-outline-primary" (click)="toastrRShow()" appRippleEffect>Show Toast</button>
<button class="btn btn-outline-danger" (click)="toastrRemove()" appRippleEffect>Remove Toast</button>
`,
  ts: `
private toastRef: any;

// Rshow
toastrRShow() {
  this.toastRef = this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', {
    toastClass: 'toast ngx-toastr',
    closeButton: true
  });
}

// Remove
toastrRemove() {
  this.toastr.remove(this.toastRef.toastId);
}
`
};

export const snippetCodeClear: SnippetCode = {
  html: `
<button class="btn btn-outline-primary" (click)="toastrCShow()" appRippleEffect>Show Toast</button>
<button class="btn btn-outline-danger" (click)="toastrClear()" appRippleEffect>Clear Toast</button>
`,
  ts: `
  // Cshow
  toastrCShow() {
    this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Clear
  toastrClear() {
    this.toastr.clear();
  }
`
};

export const snippetCodeEaseTimeout: SnippetCode = {
  html: `
<!-- toastr EaseTime -->
<button class="btn btn-outline-primary" (click)="toastrEaseTime()" appRippleEffect>Ease 1s</button>

<!-- toastr Timeout 3 Sec -->
<button class="btn btn-outline-primary" (click)="toastrTimeout3()" appRippleEffect>Timeout 3s</button>

<!-- toastr Timeout 5 Sec -->
<button class="btn btn-outline-primary" (click)="toastrTimeout5()" appRippleEffect>Timeout 5s</button>

<!-- toastr Stickey -->
<button class="btn btn-outline-primary" (click)="toastrStickey()" appRippleEffect>Stickey Toast</button>
`,
  ts: `
  // Ease Time
  toastrEaseTime() {
    this.toastr.success('Have fun storming the castle!', 'ease In 1 Sec', {
      easeTime: 1000,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Timeout 3sec
  toastrTimeout3() {
    this.toastr.warning('Have fun storming the castle!', 'timeOut 3 Sec', {
      timeOut: 3000,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Timeout 5sec
  toastrTimeout5() {
    this.toastr.error('I do not think that word means what you think it means.', 'Timeout 5 Sec!', {
      timeOut: 500000,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  // Stickey
  toastrStickey() {
    this.toastr.info('I do not think that word means what you think it means.', 'Sticky!', {
      timeOut: 0,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

`
};

export const snippetCodeCustomToastr: SnippetCode = {
  html: `
  <button class="btn btn-outline-success" (click)="toastrCustomSuccess()" appRippleEffect>
    Custom Success
  </button>
  <button class="btn btn-outline-warning" (click)="toastrCustomWarning()" appRippleEffect>
    Custom Warning
  </button>
  <button class="btn btn-outline-danger" (click)="toastrCustomDanger()" appRippleEffect>
    Custom Danger
  </button>
  <button class="btn btn-outline-info" (click)="toastrCustomInfo()" appRippleEffect>Custom Info</button>
`,
  ts: `
  import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';

  // Custom Success
  toastrCustomSuccess() {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.success('Have fun storming the castle!', 'Success!', customToastrRef);
  }

  // Custom Warning
  toastrCustomWarning() {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.warning('Have fun storming the castle!', 'Warning!', customToastrRef);
  }

  // Custom Danger
  toastrCustomDanger() {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.error('Have fun storming the castle!', 'Danger!', customToastrRef);
  }

  // Custom Info
  toastrCustomInfo() {
    const customToastrRef = cloneDeep(this.options);
    customToastrRef.toastComponent = CustomToastrComponent;
    customToastrRef.closeButton = true;
    customToastrRef.tapToDismiss = false;
    customToastrRef.progressBar = true;
    customToastrRef.toastClass = 'toast ngx-toastr';
    this.toastr.info('Have fun storming the castle!', 'Info!', customToastrRef);
  }
`
};
