type StyleObject = Record<string, string | number | null | undefined>;

export function stylex(obj: StyleObject) {
  let s = '';

  for (const k in obj) {
    const v = obj[k];

    if (!isNil(v)) {
      s += `${k}:${v};`;
    }
  }

  return s;
}

function isNil(v: unknown): v is null | undefined {
  return v === null || v === undefined;
}
