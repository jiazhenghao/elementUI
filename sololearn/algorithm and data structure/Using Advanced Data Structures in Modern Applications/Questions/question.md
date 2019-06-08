1. What data structure could be relevant when finding clusters of related users in an application.
A disjoint-set structure
2. What is geohashing?
A conversion from a multi-dimensional point in space, to a single-dimensional numeric value
3. An M-tree is for indexing 
points
4. A disjoint-set data structure implemented with maps(hash maps) is faster than a forest based implementation.
Sometimes
5. A forest based implementation of a disjoint-set data structure has a constant time Union() operation
only when using rank and path compression.
6. How is a key represented in a cuckoo filter
By a fingerprint
7. In Java and C#, what is the hash value of the 32bit integer, 4125
4125
8. How is a key represented internally in a bloom filter
By single bits in a bit string, set by a number of hash functions
9. Which hashing scheme fits the following description?
"when a new key to be inserted collides with another key, the new key is inserted in the first free bucket found, when scanning to the right"
Linear probing
10. Assume that we have a trie that indexes words with a total of N letters. Then complexity of querying for a string, formed by Q letters is
O(Q) That is, it is independent of N.
11. A trie is a data structure that is great for 
prefix querying of strings
12. K-independence for a hash function (for a family of hash functions) is a measure for 
how random the function(and family) behaves
13. What characterizes the query responds from a bloom filter?
False positives, but no false negatives
14. Which one of the following hashing schemes keeps keys with the same hash value closet together in memory
Robin Hood Hashing
15. What data structure is ideal for infix matching a string pattern
A suffix tree
16. What indexing structure is used as supporting structure to index almost anything
B-trees
17. What is the worst case time complexity for lookups and deletion in Cuckoo hashing, in a table with N keys
O(1)
18. A bloom filter supports deletion
False
19. Assume you are developing a web browser, and want to check URLs entered by the user against a register of malicious URLs. The register sits somewhere on the internet, and takes costly time to query. How could you reduce the need for querying the register?
Store a bloom filter of the list locally, and query the register if the bloom filter claims to know the URL.
20. When splitting a B-tree node
the median goes to the parent node
21. A cuckoo filter allows deletion of elements.
True