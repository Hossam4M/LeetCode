function insert(intervals: number[][], newInterval: number[]): number[][] {
    
    if (intervals.length === 0) return [newInterval];
    if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals]
    
    let p = 0;
    
    let result = [];
    
    while(p < intervals.length && intervals[p][1] < newInterval[0]) {
        result.push(intervals[p]);
        p++;
    }
    
    if (p === intervals.length) {
        result.push(newInterval);
        return result;
    }

    
    let mergedInterval = intervals[p][0] > newInterval[0] ? newInterval : [Math.min(intervals[p][0],newInterval[0]) , Math.max(intervals[p][1], newInterval[1])]
    
    while(p < intervals.length && mergedInterval[1] >= intervals[p][0]) {
        mergedInterval[1] = Math.max(intervals[p][1], mergedInterval[1]);
        p++
    }
    
    result.push(mergedInterval)
    
    for (let i = p; i < intervals.length; i++) {
        result.push(intervals[i])
    }
    
    return result

};