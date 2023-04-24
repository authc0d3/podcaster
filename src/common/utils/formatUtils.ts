import * as sanitizeHtmlFn from "sanitize-html";

export const defaultSanitizeHtmlOptions: sanitizeHtmlFn.IOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "br"],
  allowedAttributes: {
    a: ["href"],
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
