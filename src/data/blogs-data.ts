
/// <reference path="../typings/interfaces.d.ts" />

export const Blogs:any = [
    {
        id: "1",
        title: "What is React",
        category: "jslib",
        datePosted: Date.now(),
        tags:"react, framework, virtual dom",
        content: `
        <br/>
        <h2> A JavaScript library for building user interfaces </h2>
        
        <h4>Declarative</h4>
        <p>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

            Declarative views make your code more predictable and easier to debug.
        </p>


        `
    },
    {
        id: "2",
        title: "What is svelte",
        category: "compiler",
        datePosted: Date.now(),
        tags:"js, compiler, fast",
        content: `
        <h2>Cybernetically enhanced web apps</h2>
        <p>
        Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

        Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
        <br/>
        <a href="https://svelte.dev/">https://svelte.dev/</a>
        </p>
        `
    },
    {
        id: "3",
        title: "What is stenciljs",
        category: "compiler",
        datePosted: Date.now(),
        tags:"web component,compiler,ionic",
        content: `
        <br/>
        <h2>Build. Distribute. Adopt.</h2>
        <p>
        Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser.
        <br/>
        <a href="https://stenciljs.com/">https://stenciljs.com/</a>
        </p>
        `
    },
    {
        id: "4",
        title: "What is lit-html ",
        category: "templating",
        datePosted: Date.now(),
        tags:"templating, no-virtual-dom, fast",
        content: `
        <br/>
        <h2>Efficient, Expressive, Extensible HTML templates in JavaScript</h2>
        <p>
        lit-html lets you write HTML templates in JavaScript, then efficiently render and re-render those templates together with data to create and update DOM
        <br/>
        lit-html is extremely fast. It uses fast platform features like HTML template elements with native cloning.
        <br/>
        Unlike VDOM libraries, lit-html only ever updates the parts of templates that actually change - it doesn’t re-render the entire view.
        <br/>
        <a href="https://lit-html.polymer-project.org/"> https://lit-html.polymer-project.org/ </a>
        </p>
        `
    },
    ];



