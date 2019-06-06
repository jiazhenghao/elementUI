If lookup = yes
    probably have it
if lookup = no
    definitely no have it

use multiple hash functions
    to occupy multiple position of 0/1 bit streams

solve the cache problem

storage like database is slow to read

cache is much faster

but too much never-accessed data is stored in cache, makes cache occupied

using Bloom Filters to save the cache

1. first access to data, not found in cache, go to BF, if not, go to database
fetch the data, and let BF have this data's hash-key.
2. second access to data, not found in cache, but can found in BF, go to database
fetch the data, and let cache also have this data's value.
