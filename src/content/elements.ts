import Dialog from "@/src/components/elements/Dialog.astro";
import Details from "@/src/components/elements/Details.astro";
import Datalist from "@/src/components/elements/Datalist.astro";
import { DIALOG_HTML_CODE, DIALOG_JS_CODE } from "@/src/consts/dialogCode";
import type { Snippet } from "../types/codeSnippet";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { DETAILS_HTML_CODE } from "@/src/consts/detailsCode";
import { DATALIST_HTML_CODE } from "@/src/consts/datalistCode";

interface ElementContent {
    slug: string;
    title: string;
    elementName: string;
    description: string;
    whenToUse: string[];
    snippets: Snippet[];
    DemoComponent: AstroComponentFactory;
}

export const elementsContent: ElementContent[] = [
    {
        slug: "dialog",
        title: "Dialog Element",
        elementName: "The <dialog> Element",
        description: "The <dialog> element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub-window.",
        whenToUse: [
            "Use the <dialog> element when you need to create modal windows, pop-ups, or any other kind of interactive overlay that requires user interaction. It's great for things like confirmation dialogs, forms, or important notifications.",
            "Native dialogs handle focus management and keyboard accessibility (like trapping focus and closing with the 'Esc' key) out of the box, which is a huge accessibility win."
        ],
        snippets: [
            {
                code: DIALOG_HTML_CODE,
                lang: "html",
                title: "HTML",
            },
            {
                code: DIALOG_JS_CODE,
                lang: "js",
                title: "JavaScript",
            },
        ],
        DemoComponent: Dialog
    },
    {
        slug: "details",
        title: "Details & Summary Elements",
        elementName: "The <details> and <summary> Elements",
        description: "The <details> element creates a disclosure widget in which information is only visible when the widget is toggled into an 'open' state. A <summary> element provides a summary, caption, or legend for the <details> element's disclosure box.",
        whenToUse: [
            "Use the <details> and <summary> elements to create native accordions or 'show/hide' widgets without any JavaScript. This is perfect for FAQs, collapsible sections of content, or any time you want to hide content until the user explicitly chooses to see it.",
            "This is another great win for accessibility, as it's a standard HTML element that screen readers and other assistive technologies understand."
        ],
        snippets: [
            {
                code: DETAILS_HTML_CODE,
                lang: "html",
                title: "HTML",
            },
        ],
        DemoComponent: Details
    },
    {
        slug: "datalist",
        title: "Datalist Element",
        elementName: "The <datalist> Element",
        description: "The <datalist> element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.",
        whenToUse: [
            "Use the <datalist> element to provide an 'autocomplete' feature on <input> elements. It provides a list of predefined options to the user as they type, which is a great user experience for forms with many possible values.",
            "The user can select from the suggestions, or type in their own value if it's not on the list. It's more flexible than a <select> element in that way."
        ],
        snippets: [
            {
                code: DATALIST_HTML_CODE,
                lang: "html",
                title: "HTML",
            },
        ],
        DemoComponent: Datalist
    }
]; 