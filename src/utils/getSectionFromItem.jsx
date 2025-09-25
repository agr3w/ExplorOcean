export function getSectionFromItem(itemOrSection) {
  if (!itemOrSection) return null;
  if (typeof itemOrSection === "string") return itemOrSection.toLowerCase();
  if (itemOrSection.type) {
    const t = itemOrSection.type.toLowerCase();
    if (["fauna", "flora", "documentaries", "quizzes"].includes(t)) return t;
  }
  if (itemOrSection.category) {
    const c = itemOrSection.category.toLowerCase();
    if (["fauna", "flora", "documentaries", "quizzes"].includes(c)) return c;
  }
  return null;
}