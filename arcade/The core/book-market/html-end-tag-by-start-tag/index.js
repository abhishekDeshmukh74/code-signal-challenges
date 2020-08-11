function htmlEndTagByStartTag(startTag) {
    startTag = startTag.substring(0, 1) + '/' + startTag.substring(1)
    if (startTag.includes(' ')) {
        return `${startTag.split(' ')[0]}>`
    }
    return `${startTag}`
}

// Best Solution
function htmlEndTagByStartTag(startTag) {
    return `</${startTag.match(/\w+/)[0]}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
