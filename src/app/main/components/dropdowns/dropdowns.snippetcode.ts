import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: SnippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-primary"
      type="button"
      id="dropdownMenuButton"
      appRippleEffect
    >
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-secondary"
      type="button"
      id="dropdownMenuButton"
      appRippleEffect
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-success"
      type="button"
      id="dropdownMenuButton2"
      appRippleEffect
    >
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton2">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-danger"
      type="button"
      id="dropdownMenuButton4"
      appRippleEffect
    >
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton4">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-warning"
      type="button"
      id="dropdownMenuButton5"
      appRippleEffect
    >
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton5">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-info" type="button" id="dropdownMenuButton3" appRippleEffect>
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton3">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-dark" type="button" id="dropdownMenuButton7" appRippleEffect>
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton7">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeSplitDropdowns: SnippetCode = {
  html: `
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-primary" appRippleEffect>Primary</button>
  <button ngbDropdownToggle type="button" class="btn btn-primary dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-secondary" appRippleEffect>Secondary</button>
  <button ngbDropdownToggle type="button" class="btn btn-secondary dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-success" appRippleEffect>Success</button>
  <button ngbDropdownToggle type="button" class="btn btn-success dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <h6 class="dropdown-header">Header</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-danger" appRippleEffect>Danger</button>
  <button ngbDropdownToggle type="button" class="btn btn-danger dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-warning" appRippleEffect>Warning</button>
  <button ngbDropdownToggle type="button" class="btn btn-warning dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-info" appRippleEffect>Info</button>
  <button ngbDropdownToggle type="button" class="btn btn-info dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-dark" appRippleEffect>Dark</button>
  <button ngbDropdownToggle type="button" class="btn btn-dark dropdown-toggle-split" appRippleEffect>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class=" "></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
  `
};
export const snippetCodeOutline: SnippetCode = {
  html: `
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-primary" appRippleEffect>Primary</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-primary dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-secondary" appRippleEffect>Secondary</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-secondary dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem class="active" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-success" appRippleEffect>Success</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-success dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button class="btn btn-outline-danger" appRippleEffect>Danger</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-danger dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-warning" appRippleEffect>Warning</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-warning dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-info" appRippleEffect>Info</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-info dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
<div ngbDropdown class="btn-group">
  <button type="button" class="btn btn-outline-dark" appRippleEffect>Dark</button>
  <button
    ngbDropdownToggle
    type="button"
    class="btn btn-outline-dark dropdown-toggle-split"
    appRippleEffect
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div ngbDropdownMenu>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">Separated link</a>
  </div>
</div>
  `
};
export const snippetCodeFlat: SnippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-primary"
      type="button"
      id="dropdownMenuButton100"
      appRippleEffect
    >
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton100">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-secondary"
      type="button"
      id="dropdownMenuButton100"
      appRippleEffect
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton100">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-success"
      type="button"
      id="dropdownMenuButton200"
      appRippleEffect
    >
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton200">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-danger"
      type="button"
      id="dropdownMenuButton400"
      appRippleEffect
    >
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton400">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-warning"
      type="button"
      id="dropdownMenuButton500"
      appRippleEffect
    >
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton500">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-info"
      type="button"
      id="dropdownMenuButton300"
      appRippleEffect
    >
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton300">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-flat-dark"
      type="button"
      id="dropdownMenuButton700"
      appRippleEffect
    >
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton700">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeGradient: SnippetCode = {
  html: `
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-primary" type="button" id="dropdownMenuButton101">
      Primary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton101">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button
      ngbDropdownToggle
      class="btn btn-gradient-secondary"
      type="button"
      id="dropdownMenuButton101"
    >
      Secondary
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton101">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-success" type="button" id="dropdownMenuButton202">
      Success
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton202">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-danger" type="button" id="dropdownMenuButton404">
      Danger
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton404">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-warning" type="button" id="dropdownMenuButton505">
      Warning
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton505">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-info" type="button" id="dropdownMenuButton303">
      Info
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton303">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
<div class="btn-group">
  <div ngbDropdown>
    <button ngbDropdownToggle class="btn btn-gradient-dark" type="button" id="dropdownMenuButton707">
      Dark
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownMenuButton707">
      <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
      <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
    </div>
  </div>
</div>
  `
};
export const snippetCodeSizes: SnippetCode = {
  html: `
<div class="d-flex justify-content-between flex-wrap">
  <div class="demo-inline-spacing">
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary btn-lg" appRippleEffect>Large</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>Default</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div ngbDropdown>
        <button ngbDropdownToggle type="button" class="btn btn-primary btn-sm" appRippleEffect>Small</button>
        <div ngbDropdownMenu>
          <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
  </div>

  <div class="demo-inline-spacing">
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary btn-lg" appRippleEffect>Large</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary btn-lg dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        appRippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary" appRippleEffect>Default</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        appRippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown class="btn-group">
      <button type="button" class="btn btn-primary btn-sm" appRippleEffect>Small</button>
      <button
        ngbDropdownToggle
        type="button"
        class="btn btn-primary btn-sm dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        appRippleEffect
      >
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
  </div>
</div>
  `
};
export const snippetCodeDirections: SnippetCode = {
  html: `
<div class="direction-dropdown-default">
  <div class="demo-inline-spacing">
    <div class="btn-group">
      <div ngbDropdown [placement]="'bottom-right'">
        <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>
          Drop bottom right
        </button>
        <div ngbDropdownMenu class="dropdown-menu-right">
          <a ngbDropdownItem class="active" href="javascript:void(0)">Option 1</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
          <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
        </div>
      </div>
    </div>
    <div ngbDropdown [placement]="'top'" class="btn-group">
      <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>Drop up</button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown [placement]="'right-top'" class="btn-group dropright">
      <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>Drop right</button>
      <div ngbDropdownMenu>
        <h6 class="dropdown-header">Header</h6>
        <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
    <div ngbDropdown [placement]="'left-top'" class="btn-group dropleft">
      <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>Drop left</button>
      <div ngbDropdownMenu>
        <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
        <a ngbDropdownItem [disabled]="true" href="javascript:void(0)">Option 2</a>
        <a ngbDropdownItem href="javascript:void(0)">Option 3</a>
      </div>
    </div>
  </div>
</div>
  `
};
export const snippetCodeVariations: SnippetCode = {
  html: `
<div ngbDropdown [placement]="'top'" class="btn-group dropup">
  <button
    ngbDropdownToggle
    class="btn btn-primary"
    type="button"
    id="dropdownMenuButton902"
    appRippleEffect
  >
    Groups
  </button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuButton902">
    <h6 class="dropdown-header">Group 1</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <div class="dropdown-divider"></div>
    <h6 class="dropdown-header">Group 2</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
    <div class="dropdown-divider"></div>
    <h6 class="dropdown-header">Group 3</h6>
    <a ngbDropdownItem href="javascript:void(0)">Option 1</a>
    <a ngbDropdownItem href="javascript:void(0)">Option 2</a>
  </div>
</div>
<div ngbDropdown [placement]="'top'" class="btn-group dropup dropdown-icon-wrapper">
  <button type="button" class="btn btn-primary" appRippleEffect>Icons</button>
  <button ngbDropdownToggle type="button" class="btn btn-primary dropdown-toggle-split" appRippleEffect>
    <span [appDataFeather]="'wifi'" class="'dropdown-icon'"></span>
  </button>
  <div ngbDropdownMenu>
    <span ngbDropdownItem>
      <span [appDataFeather]="'wifi-off'"></span>
    </span>
    <span ngbDropdownItem>
      <span [appDataFeather]="'volume-2'"></span>
    </span>
    <span ngbDropdownItem>
      <span [appDataFeather]="'volume-x'"></span>
    </span>
    <span ngbDropdownItem>
      <span [appDataFeather]="'bell'"></span>
    </span>
    <span ngbDropdownItem>
      <span [appDataFeather]="'bell-off'"></span>
    </span>
    <span ngbDropdownItem>
      <span [appDataFeather]="'phone-off'"></span>
    </span>
  </div>
</div>
<div ngbDropdown [placement]="'top-left'" class="btn-group dropup">
  <button ngbDropdownToggle type="button" class="btn btn-primary" appRippleEffect>Form</button>
  <div ngbDropdownMenu>
    <form class="px-2 py-2">
      <div class="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleDropdownFormPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck" />
          <label class="form-check-label" for="dropdownCheck"> Remember me </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" appRippleEffect>Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a ngbDropdownItem href="javascript:void(0)">New around here? Sign up</a>
    <a ngbDropdownItem href="javascript:void(0)">Forgot password?</a>
  </div>
</div>
  `
};
