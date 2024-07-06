class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for(let char in word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node= this.root
        for ( let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEnd
    }


    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }
    
    deleteHelper(node, word, index) {
        if (index === word.length) {
            // When end of word is reached only delete if it is end of word
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            // If given is not prefix of any other word
            return Object.keys(node.children).length === 0;
        }
    
        let char = word[index];
        let childNode = node.children[char];
        if (!childNode) {
            return false;
        }
    
        let shouldDeleteChildNode = this.deleteHelper(childNode, word, index + 1);
    
        // If true is returned then delete the mapping of character and TrieNode reference from map
        if (shouldDeleteChildNode) {
            delete node.children[char];
            // Return true if no mappings are left in the map
            return Object.keys(node.children).length === 0;
        }
    
        return false;
    }

    
}




