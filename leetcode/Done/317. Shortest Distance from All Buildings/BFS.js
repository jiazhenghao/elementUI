/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
    let allthebuildings = []
    let minlength = -1
    let totalnumbuildings = 0
    const masterTable = {}
    const masterTable_buildingHit = {}
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                totalnumbuildings += 1
                allthebuildings.push([i, j])
            }
        }
    }
    for (var j = 0; j < allthebuildings.length; j++) {
        if (totalnumbuildings != bfs(grid, allthebuildings[j], masterTable, masterTable_buildingHit)) {
            return -1
        }
    }
    function bfs(grid, startingpoint) {
        let alreadyvisited = {}
        let queue = []
        let buildingsseen = 1
        alreadyvisited[startingpoint] = true
        let coordsreturned = findcoords(grid, startingpoint, 1)
        queue = queue.concat(coordsreturned)
        while (queue.length != 0) {
            let coordinate = queue.shift()
            let y = coordinate[0]
            let x = coordinate[1]
            let count = coordinate[2]
            if (alreadyvisited[[y, x]] != true && grid[y][x] === 0) {
                if (masterTable[[y, x]] === undefined) {
                    masterTable[[y, x]] = count
                    masterTable_buildingHit[[y, x]] = 1
                }
                else {
                    masterTable[[y, x]] += count
                    masterTable_buildingHit[[y, x]] += 1
                }
                alreadyvisited[[y, x]] = true
                let newcoord = findcoords(grid, [y, x], count + 1)
                queue = queue.concat(newcoord)
            }
            else if (alreadyvisited[[y, x]] != true && grid[y][x] === 1) {
                buildingsseen += 1
                alreadyvisited[[y, x]] = true
            }
        }
        return buildingsseen
    }

    let keys = Object.keys(masterTable)
    for (var i = 0; i < keys.length; i++) {
        if (masterTable_buildingHit[keys[i]] === totalnumbuildings) {
            if (minlength === -1) {
                minlength = masterTable[keys[i]]
            }
            else {
                minlength = Math.min(minlength, masterTable[keys[i]])
            }
        }
    }
    return minlength
}

function findcoords(grid, startingpoint, count) {
    let y = startingpoint[0]
    let x = startingpoint[1]
    let coords = [[y + 1, x, count], [y - 1, x, count], [y, x + 1, count], [y, x - 1, count]];
    let coordsreturned = []
    for (let coord of coords) {
        if (coord[0] >= 0 && coord[0] < grid.length && coord[1] < grid[0].length && coord[1] >= 0) {
            coordsreturned.push(coord)
        }
    }
    return coordsreturned
}