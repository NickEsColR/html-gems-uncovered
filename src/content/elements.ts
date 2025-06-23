import Dialog from "@/src/components/elements/Dialog.astro";
import Details from "@/src/components/elements/Details.astro";
import Datalist from "@/src/components/elements/Datalist.astro";
import Meter from "@/src/components/elements/Meter.astro";
import { DIALOG_HTML_CODE, DIALOG_JS_CODE } from "@/src/consts/dialogCode";
import type { Snippet } from "../types/codeSnippet";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { DETAILS_HTML_CODE } from "@/src/consts/detailsCode";
import { DATALIST_HTML_CODE } from "@/src/consts/datalistCode";
import { METER_HTML_CODE } from "@/src/consts/meterCode";
import Output from "@/src/components/elements/Output.astro";
import { OUTPUT_HTML_CODE } from "@/src/consts/outputCode";
import Mark from "@/src/components/elements/Mark.astro";
import { MARK_HTML_CODE } from "@/src/consts/markCode";
import Time from "@/src/components/elements/Time.astro";
import { TIME_HTML_CODE } from "@/src/consts/timeCode";
import Figure from "@/src/components/elements/Figure.astro";
import { FIGURE_HTML_CODE } from "@/src/consts/figureCode";

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
    },
    {
        slug: "meter",
        title: "Meter Element",
        elementName: "The <meter> Element",
        description: "The <meter> element represents either a scalar value within a known range or a fractional value.",
        whenToUse: [
            "Use the <meter> element to display a measurement within a range, such as disk usage, test scores, or a battery level.",
            "It's ideal for visualizing values that have a minimum, maximum, and possibly low/high/optimum thresholds."
        ],
        snippets: [
            {
                code: METER_HTML_CODE,
                lang: "html",
                title: "HTML",
            },
        ],
        DemoComponent: Meter
    },
    {
        slug: "output",
        title: "Output Element",
        elementName: "The <output> Element",
        description: "The <output> element is used to display the result of a calculation or user action, especially in forms or calculators. It creates a semantic relationship between the inputs and the result, improving accessibility for screen readers.",
        whenToUse: [
            "Use the <output> element when you want to display dynamic calculation results in forms or calculators.",
            "It is especially useful for associating the result with specific input fields using the 'for' attribute, which helps assistive technologies understand the relationship."
        ],
        snippets: [
            {
                code: OUTPUT_HTML_CODE,
                lang: "html",
                title: "HTML",
            }
        ],
        DemoComponent: Output // Placeholder, no Output.astro component yet
    },
    {
        slug: "mark",
        title: "Mark Element",
        elementName: "The <mark> Element",
        description: "The <mark> element is used for semantic highlighting of text, indicating that the text is relevant or important, such as search term matches. It provides meaning to assistive technologies, unlike a plain <span>.",
        whenToUse: [
            "Use the <mark> element to highlight search terms or important text in documentation, search results, or knowledge bases.",
            "It is especially useful for accessibility, as screen readers can announce that text is highlighted.",
            "Customize its appearance with CSS or Tailwind classes for a better user experience."
        ],
        snippets: [
            {
                code: MARK_HTML_CODE,
                lang: "html",
                title: "HTML",
            }
        ],
        DemoComponent: Mark
    },
    {
        slug: "time",
        title: "Time Element",
        elementName: "The <time> Element",
        description: "The <time> element is used to mark up dates, times, or durations in a machine-readable way, while displaying a human-friendly format to users. The datetime attribute uses the ISO 8601 format, making it useful for search engines, browsers, and assistive technologies.",
        whenToUse: [
            "Use the <time> element to semantically mark up dates, times, or durations in your content.",
            "It is especially valuable for blogs, news sites, and social media platforms where accurate date and time information is important.",
            "The datetime attribute allows machines to extract and process the date/time, while users see a friendly format."
        ],
        snippets: [
            {
                code: TIME_HTML_CODE,
                lang: "html",
                title: "HTML",
            }
        ],
        DemoComponent: Time
    },
    {
        slug: "figure",
        title: "Figure & Figcaption Elements",
        elementName: "The <figure> and <figcaption> Elements",
        description: "The <figure> element is used to semantically group media or content with an associated caption, while <figcaption> provides the caption. This improves accessibility and gives meaning to images, code snippets, and quotes.",
        whenToUse: [
            "Use <figure> and <figcaption> to add captions to images, code snippets, charts, or quotes.",
            "They are especially useful in content management systems, blogs, and documentation sites where captions are needed for various types of content.",
            "Screen readers can announce the caption as related to the content, improving accessibility."
        ],
        snippets: [
            {
                code: FIGURE_HTML_CODE,
                lang: "html",
                title: "HTML",
            }
        ],
        DemoComponent: Figure
    }
]; 