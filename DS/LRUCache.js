const LRUCache = (size) => {
    const map = new Map();

    return {
        put: (key, value) => {

            if (map.size === size) {
                //evict the LRU 
                const LRU = [...map.keys()][size - 1]
                map.delete(LRU)
            }

            map.set(key, value)

        },
        get: (key) => {
            if (map.has(key)) {
                //appending at top  to make it the MRU
                map.set(key, map.get(key));
                return map.get(key)
            } else return -1
        },
        show:()=>{
            console.log(map);
        }
    }

}

const cache1 = LRUCache(2)
cache1.put(1,10)
cache1.put(2,20)

cache1.get(1)
cache1.put(3,30)

cache1.show();