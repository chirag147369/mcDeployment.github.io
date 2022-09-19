import { SnippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeCredit: SnippetCode = {
  html: `
  <input class="form-control" type="text" placeholder="1234 5678 8765 4321" mask="0000 0000 0000 0000" />
  `
};
export const snippetCodePhone: SnippetCode = {
  html: `
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">+63</span>
    </div>
    <input type="text" class="form-control" placeholder="(760) 123 00 00" mask="(000) 000 00 00" />
  </div>
  `
};
export const snippetCodeDate: SnippetCode = {
  html: `
  <input class="form-control" type="text" placeholder="01/02/2023" mask="00/00/0000" />
  `
};
export const snippetCodeTime: SnippetCode = {
  html: `
  <input class="form-control" type="text" placeholder="23:23:59" mask="Hh:m0:s0" />
  `
};
export const snippetCodeNumeral: SnippetCode = {
  html: `
  <input class="form-control" type="text" placeholder="10,000" mask="separator" thousandSeparator="," />
  `
};
export const snippetCodeSecure: SnippetCode = {
  html: `
  <input
  class="form-control"
  type="text"
  placeholder="XXX/X9/2032"
  [hiddenInput]="true"
  mask="XXX/X0/0000"
  />
  `
};
export const snippetCodePrefix: SnippetCode = {
  html: `
  <input class="form-control" placeholder="+63" type="text" prefix="+63 " mask="(000) 000 00 00" />
  `
};
export const snippetCodeSuffix: SnippetCode = {
  html: `
  <input class="form-control" placeholder="987654$" type="text" suffix=" $" mask="0000" />
  `
};
export const snippetCodeBlocks: SnippetCode = {
  html: `
  <input class="form-control" placeholder="1234 123 123" type="text" mask="0000 000 000" />
  `
};
export const snippetCodeDelimiters: SnippetCode = {
  html: `
  <input class="form-control" placeholder="123.456" type="text" mask="separator" thousandSeparator="." />
  `
};
