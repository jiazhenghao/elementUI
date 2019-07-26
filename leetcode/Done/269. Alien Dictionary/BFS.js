var alienOrder = function(words) {
    
    let map = new Map()
    let inMap = new Map()
    let result = ""
    
    //Setup adjacency list
    
    for(var x = 0; x < words.length-1; x++){
        
        let curW = words[x]
        let nextW = words[x+1]
        
        for(var w = 0; w < curW.length;w++){            
            if(curW.charAt(w) != nextW.charAt(w)){
                //add if not in map
                if(!map.has(curW.charAt(w))){
                    if(nextW.charAt(w) != ""){
                        map.set(curW.charAt(w),[nextW.charAt(w)])
                    } else {
                        map.set(curW.charAt(w),[])
                    }
                } 
                else if(!map.get(curW.charAt(w)).includes(nextW.charAt(w))){
                    map.get(curW.charAt(w)).push(nextW.charAt(w))
                }
                break;
            }            
        }     
    }
    
    
    //console.log("w map", map)
    
    //calc in degrees
    
    words.forEach((word)=>{
        for(var x = 0; x < word.length; x++){
            if(!inMap.has(word.charAt(x))){
                inMap.set(word.charAt(x),0)
            }
        }
    })
    
    map.forEach((value,key)=>{
        
        value.forEach((edge)=>{
                inMap.set(edge,inMap.get(edge)+1)
        })        
    })
    //console.log("inMap", inMap)
    let queue = []
    
    inMap.forEach((value,key)=>{
        if(value == 0){
            queue.push(key)
            inMap.delete(key)
        }             
    })
    
    //console.log("Q", queue)
    
    
    
    while(queue.length > 0){
        let element = queue.shift()
        result = result.concat(element)

        let children = map.get(element)

        //console.log("children", children)
        if(children){
            children.forEach((value)=>{

                inMap.set(value,inMap.get(value)-1)            
                if(inMap.get(value)==0){
                    queue.push(value)
                    inMap.delete(value)
                }
            })
        }
    }
    //console.log("result", result)

    return inMap.size == 0 ?  result :  ""

};

/*
Runtime: 52 ms, faster than 99.53% 
Memory Usage: 34.2 MB, less than 98.75% 
*/