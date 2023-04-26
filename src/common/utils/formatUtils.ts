import sanitizeHtmlFn from "sanitize-html";

export const defaultSanitizeHtmlOptions: sanitizeHtmlFn.IOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "br", "p"],
  allowedAttributes: {
    a: ["href", "role"],
  },
};

export const sanitizeHtml = (
  dirty: string = "",
  options?: sanitizeHtmlFn.IOptions
): {
  __html: string;
} => ({
  __html: sanitizeHtmlFn(dirty, { ...defaultSanitizeHtmlOptions, ...options }),
});
