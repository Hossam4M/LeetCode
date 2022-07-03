class SnapshotArray {
    private id: number;
    private current: number[];
    private archive: number[][];
    
 constructor(length) {
        this.id = 0;
        this.current = [];
        this.archive = [];
    }

    set(index, val) {
        this.current[index] = val;
    }

    snap() {
        this.archive.push([...this.current]);
        return this.id++;
    }

    get(index, snap_id) {
        const val = this.archive[snap_id][index];
        return val !== undefined ? val : 0;
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */