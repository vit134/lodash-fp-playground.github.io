/* eslint-disable */

const container = document.querySelector('.react-menu-container')
const sections = container.querySelectorAll('div:not(.search)')

const data = Array.from(sections).map((el) => {
    return {
        title: el.querySelector('.collapsible-title') && el.querySelector('.collapsible-title').innerText,
        methods: Array.from(el.querySelectorAll('li a')).map(link => {
            const id = link.href.split('#')[1];
            const body = document.getElementById(id).parentElement;
            // var argsHeadings = body.evaluate("//h4[contains(., 'Arguments')]", document, null, XPathResult.ANY_TYPE, null );
            const argsHeadings = Array.from(body.querySelectorAll('h4')).find(el => el.innerText === 'Arguments');
            const argsNode = argsHeadings && argsHeadings.nextSibling;


            // var returnsHeadings = body.evaluate("//h4[contains(., 'Returns')]", document, null, XPathResult.ANY_TYPE, null );
            const returnsHeadings = Array.from(body.querySelectorAll('h4')).find(el => el.innerText === 'Returns');
            const returnsNode = returnsHeadings && returnsHeadings.nextSibling;

            return {
                title: link.innerText,
                id,
                descr: body.querySelector('h3 + p + p') && body.querySelector('h3 + p + p').innerText,
                args: argsNode && Array.from(argsNode.querySelectorAll('li')).map(el => {
                    return el && el.innerText;
                }),
                returns: returnsNode && returnsNode.innerText
            }
        })
    }
})

console.log(JSON.stringify(data));
