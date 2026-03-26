export type MockHolding = {
  sym: string;
  name: string;
  ex: string;
  ch: string;
  up: boolean;
};

/** Demo listings shown in the portfolio preview */
export const MOCK_HOLDINGS: MockHolding[] = [
  { sym: "DANGCEM", name: "Dangote Cement", ex: "NGX", ch: "+1.24%", up: true },
  { sym: "NPN", name: "Naspers", ex: "JSE", ch: "-0.42%", up: false },
  { sym: "MTN", name: "MTN Group", ex: "JSE", ch: "+0.89%", up: true },
  { sym: "GCB", name: "GCB Bank", ex: "GSE", ch: "+2.10%", up: true },
];
