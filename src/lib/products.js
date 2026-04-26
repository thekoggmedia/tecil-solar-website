// /src/lib/products.js

export async function fetchProducts(sheetUrl) {
  const res = await fetch(sheetUrl);
  const text = await res.text();

  // Strip Google wrapper
  const json = JSON.parse(
    text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1)
  );

  const rows = json.table.rows;

  return rows.map(row => ({
    id:        get(row, 0),
    category:  get(row, 1),
    brand:     get(row, 2),
    name:      get(row, 3),
    capacity:  get(row, 4),
    type:      get(row, 5),
    quickName: get(row, 6),
    price:     get(row, 7),
    image:     get(row, 11) || get(row, 10),
    status:    get(row, 18),
  }))
  .filter(p => p.name && p.status !== 'Hidden');
}

function get(row, index) {
  return row.c?.[index]?.v?.toString().trim() || '';
}