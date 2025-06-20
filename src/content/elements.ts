import DialogComponent from "@/src/components/elements/Dialog.astro";
import { DIALOG_HTML_CODE, DIALOG_JS_CODE } from "@/src/consts/dialogCode";
import type { Snippet } from "../types/codeSnippet";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

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
        DemoComponent: DialogComponent
    },
]; 