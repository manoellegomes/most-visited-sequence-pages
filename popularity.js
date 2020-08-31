function popularity(logPagesVisited) {
    let pagesUsers = {};
    let allSequences = [];

    if (typeof logPagesVisited === 'undefined') {
        return false;
    }

    return {
        pagesVisitedByUsers() {
            
            logPagesVisited.forEach((element, index) => {                
                if(typeof pagesUsers[element.user] === 'undefined') {
                    pagesUsers[element.user] = [];
                }
                pagesUsers[element.user].push(element.page); 
            });             
            
            return pagesUsers;
        },
        allSequencesVisited(pagesUsers) {
            Object.values(pagesUsers).forEach((pages, indexUser) => {   
                pages.forEach((page, index) => {                 
                    if (pages[index+1] && pages[index+2]) {

                        const sequence = `${pages[index]}, ${pages[index+1]}, ${pages[index+2]}`;

                        allSequences.push(sequence);                        
                    }
                });
            });

            return allSequences;
        },
        getSequenceMostVisited(allSequences) {
            return allSequences.sort((a,b) =>
                allSequences.filter(v => v===a).length
                - allSequences.filter(v => v===b).length
            ).pop();
        }
    }
}

module.exports = { popularity }