function domainType(domains) {
    return domains.map(
        domain => {
            if (/.com$/.test(domain)) return 'commercial'
            if (/.org$/.test(domain)) return 'organization'
            if (/.net$/.test(domain)) return 'network'
            if (/.info$/.test(domain)) return 'information'
        }
    )
}

console.log(domainType(["en.wiki.org", "codesignal.com", "happy.net", "code.info"]))
